'use server';

export type ContactState = {status: 'idle' | 'success' | 'error'};

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const rawName = formData.get('name');
  const rawEmail = formData.get('email');
  const rawMessage = formData.get('message');

  if (typeof rawName !== 'string' || typeof rawEmail !== 'string' || typeof rawMessage !== 'string') {
    return {status: 'error'};
  }

  const name = rawName.trim().replace(/[\r\n\t]+/g, ' ').slice(0, 120);
  const email = rawEmail.trim();
  const message = rawMessage.trim();

  if (
    !name ||
    !email ||
    !message ||
    email.length > 254 ||
    message.length > 5000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return {status: 'error'};
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error('Contact form is missing Resend environment variables.');
    return {status: 'error'};
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Message du portfolio — ${name}`,
        text: `Nom : ${name}\nE-mail : ${email}\n\n${message}`
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000)
    });

    if (!response.ok) {
      console.error(`Resend rejected the contact message (HTTP ${response.status}).`);
      return {status: 'error'};
    }
  } catch (error) {
    console.error('Resend could not send the contact message.', error);
    return {status: 'error'};
  }

  return {status: 'success'};
}
