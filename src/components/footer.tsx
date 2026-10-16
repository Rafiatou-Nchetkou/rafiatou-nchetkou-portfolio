import {Suspense} from 'react';
import {Mail} from 'lucide-react';
import {CurrentYear} from '@/components/current-year';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono">
          <Suspense fallback={null}>
          © <CurrentYear /> Nchetkou Rafiatou Joupouo
          </Suspense>
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/Rafiatou-Nchetkou" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground">
            <BsGithub className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/rafiatou-nchetkou" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
            <BsLinkedin className="h-4 w-4" />
          </a>
          <a href="mailto:nchetkourafiatou@gmail.com" aria-label="Email" className="hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
