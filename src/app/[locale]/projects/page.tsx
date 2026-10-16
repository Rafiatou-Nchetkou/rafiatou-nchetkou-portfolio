import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {projects} from '@/data/projects';
import {Stagger, StaggerItem} from '@/components/motion/stagger';
import {ArrowUpRight} from 'lucide-react';

export default async function ProjectsPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Projects');
  const l = locale as 'fr' | 'en';

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{t('title')}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{t('intro')}</p>

      <Stagger className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <StaggerItem key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:bg-muted/60"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium">{p.title[l]}</h2>
                <ArrowUpRight className="h-4 w-4 -translate-y-0.5 opacity-0 transition-all group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.summary[l]}</p>
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
