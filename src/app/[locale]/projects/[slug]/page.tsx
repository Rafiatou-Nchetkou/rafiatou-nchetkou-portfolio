import Image from 'next/image';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {ArrowLeft, ExternalLink} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {projects} from '@/data/projects';
import {FadeIn} from '@/components/motion/fade-in';
import {BsGithub} from 'react-icons/bs';

export function generateStaticParams() {
  return projects.map((p) => ({slug: p.slug}));
}

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const l = locale as 'fr' | 'en';

  return (
    <article className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> {l === 'fr' ? 'Tous les projets' : 'All projects'}
      </Link>

      <FadeIn className="mt-10 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="font-mono text-xs text-muted-foreground">
            {project.year} · {project.role[l]}{!project.cover && ` · ${l === 'fr' ? 'Projet d’entreprise' : 'Company project'}`}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title[l]}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.summary[l]}</p>
        </div>
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-muted">
            <BsGithub className="h-4 w-4" /> GitHub <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </FadeIn>

      {project.cover && <FadeIn className="mt-10">
        <div className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-border bg-muted shadow-xl shadow-black/5">
          <Image src={project.cover} alt="" fill priority sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" />
        </div>
      </FadeIn>}

      <div className="mt-16 space-y-20 sm:mt-24">
        {project.chapters?.map((chapter, index) => (
          <FadeIn key={chapter.title.en} className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${index % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">0{index + 1} / 03</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{chapter.title[l]}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{chapter.body[l]}</p>
            </div>
            <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted shadow-lg shadow-black/5">
              <Image src={chapter.image} alt={chapter.alt[l]} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <figcaption className="absolute bottom-3 right-3 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[11px] text-white backdrop-blur">
                {l === 'fr' ? 'Maquette illustrative' : 'Illustrative mockup'}
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>

      <section className="mt-20 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{l === 'fr' ? 'Contexte' : 'Overview'}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{project.description[l]}</p>
        </div>
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{l === 'fr' ? 'Points clés' : 'Highlights'}</h2>
          <ul className="mt-4 space-y-3">
            {project.highlights[l].map((highlight) => (
              <li key={highlight} className="flex gap-3 text-muted-foreground">
                <span className="text-accent" aria-hidden="true">→</span>{highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-20 border-t border-border pt-8">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{l === 'fr' ? 'Technologies' : 'Technologies'}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span key={technology} className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">{technology}</span>
          ))}
        </div>
      </section>
    </article>
  );
}
