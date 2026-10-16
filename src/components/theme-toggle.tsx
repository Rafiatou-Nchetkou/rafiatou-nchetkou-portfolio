'use client';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {Moon, Sun} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-border transition-colors hover:bg-muted"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{y: -10, opacity: 0, rotate: -90}}
            animate={{y: 0, opacity: 1, rotate: 0}}
            exit={{y: 10, opacity: 0, rotate: 90}}
            transition={{duration: 0.2}}
            className="absolute"
          >
            {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}