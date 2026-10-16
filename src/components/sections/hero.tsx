'use client';
import {motion} from 'motion/react';
import {useTranslations} from 'next-intl';
import {ArrowRight, Sparkles} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {Magnetic} from '@/components/motion/magnetic';
import {AuroraBackground} from '@/components/motion/aurora-background';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-16">
        <motion.div
          initial={{opacity: 0, scale: 0.96, y: 16}}
          animate={{opacity: 1, scale: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1]}}
          className="relative order-1 mx-auto w-full max-w-[350px] lg:order-2 lg:max-w-[410px]"
        >
          <div aria-hidden className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-accent/40 via-accent-2/30 to-accent-3/40 blur-2xl" />
          <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-accent via-accent-2 to-accent-3" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted ring-1 ring-background/60">
            <Image
              src="/avatar.webp"
              alt="Rafiatou Nchetkou"
              fill
              priority
              sizes="(min-width: 1024px) 410px, (min-width: 640px) 350px, 80vw"
              className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-[1.03]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-md">
              {t('stat3')}
            </div>
          </div>
        </motion.div>

        <div className="order-2 lg:order-1">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t('badge')}
          </motion.div>

        <motion.h1
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1]}}
          className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {t('titleBefore')}
          <span className="font-serif italic font-normal bg-gradient-to-r from-accent via-accent-2 to-accent-3 bg-clip-text text-transparent">
            {t('titleAccent')}
          </span>
          {t('titleAfter')}
        </motion.h1>

        <motion.p
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1]}}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, delay: 0.25}}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              {t('ctaPrimary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-muted"
            >
              <Sparkles className="h-4 w-4" />
              {t('ctaSecondary')}
            </Link>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, delay: 0.4}}
          className="mt-16 flex flex-wrap gap-8 border-t border-border/60 pt-8 text-sm text-muted-foreground"
        >
          <div>
            <div className="text-2xl font-semibold text-foreground">3+</div>
            <div>{t('stat1')}</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-foreground">8+</div>
            <div>{t('stat2')}</div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
