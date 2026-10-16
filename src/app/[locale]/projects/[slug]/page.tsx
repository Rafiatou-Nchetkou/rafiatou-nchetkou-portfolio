import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {ArrowLeft, ExternalLink} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {projects} from '@/data/projects';
import {FadeIn} from '@/components/motion/fade-in';
import { BsGithub } from 'react-icons/bs';

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
    <article className="mx-auto max-w-3xl px-6 py-24">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Retour
      </Link>

      <FadeIn className="mt-10">
        <p className="font-mono text-xs text-muted-foreground">{project.year}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title[l]}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.summary[l]}</p>
      </FadeIn>

      <FadeIn className="mt-10 flex flex-wrap gap-3">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background"
          >
            <ExternalLink className="h-4 w-4" /> Démo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm"
          >
            <BsGithub className="h-4 w-4" /> Code
          </a>
        )}
      </FadeIn>

      <FadeIn className="mt-16 space-y-10">
        <Block title="Stack">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-full border border-border px-3 py-1 font-mono text-xs">
                {s}
              </span>
            ))}
          </div>
        </Block>

        <Block title="Rôle">
          <p>{project.role[l]}</p>
        </Block>

        <Block title="Contexte">
          <p className="leading-relaxed">{project.description[l]}</p>
        </Block>

        <Block title="Points clés">
          <ul className="space-y-2">
            {project.highlights[l].map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-accent">→</span> {h}
              </li>
            ))}
          </ul>
        </Block>
      </FadeIn>
    </article>
  );
}

function Block({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
