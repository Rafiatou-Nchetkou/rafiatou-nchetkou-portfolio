'use server';

export type ContactState = {status: 'idle' | 'success' | 'error'};

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {status: 'error'};
  }

  // Branche ici Resend / Nodemailer :
  // await resend.emails.send({ from: 'site@alexmartin.dev', to: 'hello@alexmartin.dev', subject: `Contact — ${name}`, text: message, replyTo: email });
  console.log('Contact', {name, email, message});

  return {status: 'success'};
}