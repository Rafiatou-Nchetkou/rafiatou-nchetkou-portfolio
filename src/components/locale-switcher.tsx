'use client';
import {useLocale} from 'next-intl';
import {useParams} from 'next/navigation';
import {useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const next = locale === 'fr' ? 'en' : 'fr';

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(() => {
          // @ts-expect-error next-intl typed params
          router.replace({pathname, params}, {locale: next});
        })
      }
      className="rounded-full border border-border px-3 py-1.5 text-xs font-medium uppercase transition-colors hover:bg-muted disabled:opacity-50"
    >
      {locale}
    </button>
  );
}
