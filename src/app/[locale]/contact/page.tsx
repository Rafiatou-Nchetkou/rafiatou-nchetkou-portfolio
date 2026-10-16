import {Suspense} from 'react';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Mail} from 'lucide-react';
import {FadeIn} from '@/components/motion/fade-in';
import {ContactForm} from '@/components/contact-form';
import { BsGithub } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');

  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2">
      <FadeIn>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{t('title')}</h1>
        <p className="mt-4 text-muted-foreground">{t('intro')}</p>

        <ul className="mt-10 space-y-3 text-sm">
          <li>
            <a href="mailto:nchetkourafiatou@gmail.com" className="inline-flex items-center gap-3 hover:text-accent">
              <Mail className="h-4 w-4" /> nchetkourafiatou@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/Rafiatou-Nchetkou" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-accent">
              <BsGithub className="h-4 w-4" /> github.com/Rafiatou-Nchetkou
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rafiatou-nchetkou" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-accent">
              <FiLinkedin className="h-4 w-4" /> linkedin.com/in/rafiatou-nchetkou
            </a>
          </li>
        </ul>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Suspense fallback={<div className="min-h-80" />}>
          <ContactForm />
        </Suspense>
      </FadeIn>
    </section>
  );
}
