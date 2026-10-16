import {getTranslations} from 'next-intl/server';
import {projects} from '@/data/projects';
import {Link} from '@/i18n/navigation';
import {Stagger, StaggerItem} from '@/components/motion/stagger';
import {ArrowRight, ArrowUpRight} from 'lucide-react';

export async function FeaturedProjects({locale}: {locale: 'fr' | 'en'}) {
  const t = await getTranslations('Featured');
  const featured = projects.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('title')}</h2>
          <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
        </div>
        <Link href="/projects" className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:inline-flex">
          {t('seeAll')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
        {featured.map((p) => (
          <StaggerItem key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:bg-muted/60"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium">{p.title[locale]}</h3>
                <ArrowUpRight className="h-4 w-4 -translate-y-0.5 opacity-0 transition-all group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.summary[locale]}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
