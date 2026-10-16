'use client';
import {motion} from 'motion/react';

export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Orbe violet principal */}
      <motion.div
        className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full opacity-50 blur-[130px]"
        style={{background: 'radial-gradient(circle, rgb(124 58 237 / 0.55), transparent 70%)'}}
        animate={{x: [0, 80, -30, 0], y: [0, 60, 100, 0]}}
        transition={{duration: 24, repeat: Infinity, ease: 'easeInOut'}}
      />
      {/* Orbe rose */}
      <motion.div
        className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-45 blur-[130px]"
        style={{background: 'radial-gradient(circle, rgb(236 72 153 / 0.5), transparent 70%)'}}
        animate={{x: [0, -70, 40, 0], y: [0, -40, -80, 0]}}
        transition={{duration: 28, repeat: Infinity, ease: 'easeInOut'}}
      />
      {/* Orbe corail */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{background: 'radial-gradient(circle, rgb(251 146 60 / 0.45), transparent 70%)'}}
        animate={{scale: [1, 1.15, 1], x: [-40, 40, -40]}}
        transition={{duration: 20, repeat: Infinity, ease: 'easeInOut'}}
      />

      {/* Grille très subtile */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
    </div>
  );
}