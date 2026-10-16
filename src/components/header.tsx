'use client';
import {motion} from 'motion/react';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {ThemeToggle} from './theme-toggle';
import {LocaleSwitcher} from './locale-switcher';

export function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();

  const links = [
    {href: '/', label: t('home')},
    {href: '/projects', label: t('projects')},
    {href: '/a-propos', label: t('about')},
    {href: '/contact', label: t('contact')}
  ];

  return (
    <motion.header
      initial={{y: -24, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="" className="h-7 w-7 rounded-lg" />
          <span className="font-mono text-sm font-semibold tracking-tight">
            rafiatou<span className="text-accent">.</span>dev
          </span>
        </Link>

        <nav className="hidden gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-muted"
                    transition={{type: 'spring', stiffness: 380, damping: 30}}
                  />
                )}
                <span className={`relative ${active ? 'text-foreground' : ''}`}>{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
