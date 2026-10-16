import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {FadeIn} from '@/components/motion/fade-in';

export async function CTA() {
  const t = await getTranslations('CTA');
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn className="rounded-3xl border border-border bg-muted/40 p-10 text-center sm:p-16">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
        >
          {t('button')}
        </Link>
      </FadeIn>
    </section>
  );
}