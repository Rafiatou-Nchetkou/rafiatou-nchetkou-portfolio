'use client';

import {use} from 'react';
import {io} from 'next/cache';

export function CurrentYear() {
  use(io());
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
