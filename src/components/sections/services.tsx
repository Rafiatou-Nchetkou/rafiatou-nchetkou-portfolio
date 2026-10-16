import {getTranslations} from 'next-intl/server';
import {Stagger, StaggerItem} from '@/components/motion/stagger';

type Service = {title: string; description: string};

export async function Services() {
  const t = await getTranslations('Services');
  const items = t.raw('items') as Service[];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('title')}</h2>
      <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>

      <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((s) => (
          <StaggerItem
            key={s.title}
            className="rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:bg-muted/60"
          >
            <h3 className="text-lg font-medium">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}