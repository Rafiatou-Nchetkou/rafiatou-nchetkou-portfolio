'use client';
import {motion} from 'motion/react';
import type {ReactNode} from 'react';

export function Stagger({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: '-80px'}}
      variants={{hidden: {}, visible: {transition: {staggerChildren: 0.08, delayChildren: delay}}}}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({children, className}: {children: ReactNode; className?: string}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
      }}
    >
      {children}
    </motion.div>
  );
}