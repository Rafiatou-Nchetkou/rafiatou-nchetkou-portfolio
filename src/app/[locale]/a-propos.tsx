import {getTranslations, setRequestLocale} from 'next-intl/server';
import Image from 'next/image';
import {FadeIn} from '@/components/motion/fade-in';

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('About');

  const soft = t.raw('soft') as string[];
  const langues = t.raw('langues') as string[];
  const formation = t.raw('formation') as {title: string; place: string; period: string}[];
  const courses = t.raw('courses') as string[];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
        {/* Colonne gauche : portrait sticky */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <FadeIn>
            <div className="relative">
              {/* Halo dégradé derrière */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] opacity-50 blur-3xl"
                style={{
                  background:
                    'conic-gradient(from 120deg, rgb(124 58 237 / 0.7), rgb(236 72 153 / 0.6), rgb(251 146 60 / 0.6), rgb(124 58 237 / 0.7))'
                }}
              />
              {/* Bordure gradient */}
              <div
                aria-hidden
                className="absolute -inset-[2px] rounded-[1.75rem]"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #ec4899 50%, #fb923c)'
                }}
              />
              {/* Photo */}
              <div className="relative overflow-hidden rounded-[1.7rem] bg-muted ring-2 ring-background">
                <Image
                  src="/avatar.webp"
                  alt="Rafiatou Nchetkou"
                  width={840}
                  height={1120}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Petit encart sous la photo */}
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-muted/30 px-5 py-4 text-sm">
              <div>
                <div className="font-medium">Cameroun</div>
                <div className="text-xs text-muted-foreground">Disponible pour missions remote</div>
              </div>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Colonne droite : contenu */}
        <div>
          <FadeIn>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{t('title')}</h1>
            <p className="mt-6 text-xl text-muted-foreground">{t('intro')}</p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8 space-y-4 text-lg leading-relaxed">
            <p>{t('body1')}</p>
            <p>{t('body2')}</p>
            <p className="text-muted-foreground">{t('body3')}</p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-16 space-y-12">
            <Block title={t('skillsTitle')}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Skill label={t('skills.frontend')} value="React, Next.js, TypeScript, HTML5, CSS3, JavaScript, Tailwind" />
                <Skill label={t('skills.backend')} value="Node.js, API REST (Swagger)" />
                <Skill label={t('skills.tools')} value="Git, GitHub, Figma, VS Code, ClickUp, Slack" />
              </div>
            </Block>

            <Block title={t('softTitle')}>
              <div className="flex flex-wrap gap-2">
                {soft.map((s) => (
                  <span key={s} className="rounded-full border border-border px-3 py-1 text-sm">{s}</span>
                ))}
              </div>
            </Block>

            <Block title={t('languesTitle')}>
              <ul className="space-y-1 text-muted-foreground">
                {langues.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </Block>

            <Block title={t('formationTitle')}>
              <ul className="space-y-4">
                {formation.map((f) => (
                  <li key={f.title} className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-0">
                    <div>
                      <div className="font-medium">{f.title}</div>
                      <div className="text-sm text-muted-foreground">{f.place}</div>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">{f.period}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={t('coursesTitle')}>
              <ul className="space-y-1 text-muted-foreground">
                {courses.map((c) => <li key={c}>• {c}</li>)}
              </ul>
            </Block>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Block({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Skill({label, value}: {label: string; value: string}) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm">{value}</div>
    </div>
  );
}