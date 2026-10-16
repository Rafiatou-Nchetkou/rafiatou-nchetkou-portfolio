'use server';

import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {status: 'idle' | 'success' | 'error'};

export async function sendMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {status: 'error'};
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'nchetkourafiatou@gmail.com',
      replyTo: email,
      subject: `Contact portfolio — ${name}`,
      text: `De : ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #7c3aed;">Nouveau message du portfolio</h2>
          <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `
    });

    return {status: 'success'};
  } catch (error) {
    console.error('Resend error:', error);
    return {status: 'error'};
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}