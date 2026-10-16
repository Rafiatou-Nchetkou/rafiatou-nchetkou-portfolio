'use client';

import {useActionState} from 'react';
import {useTranslations} from 'next-intl';
import {motion} from 'motion/react';
import {sendMessage, type ContactState} from '@/app/[locale]/contact/actions';

const initial: ContactState = {status: 'idle'};

export function ContactForm() {
  const t = useTranslations('Contact');
  const [state, action, pending] = useActionState(sendMessage, initial);

  const inputCls =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent';

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder={t('name')} className={inputCls} />
        <input name="email" type="email" required placeholder={t('email')} className={inputCls} />
      </div>
      <textarea name="message" required rows={6} placeholder={t('message')} className={inputCls} />

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02] disabled:opacity-50"
      >
        {pending ? '…' : t('send')}
      </button>

      {state.status === 'success' && (
        <motion.p
          initial={{opacity: 0, y: 6}}
          animate={{opacity: 1, y: 0}}
          className="text-sm text-emerald-500"
        >
          {t('success')}
        </motion.p>
      )}
      {state.status === 'error' && (
        <motion.p
          initial={{opacity: 0, y: 6}}
          animate={{opacity: 1, y: 0}}
          className="text-sm text-red-500"
        >
          {t('error')}
        </motion.p>
      )}
    </form>
  );
}