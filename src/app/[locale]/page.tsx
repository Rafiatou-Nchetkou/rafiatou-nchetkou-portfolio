import {setRequestLocale} from 'next-intl/server';
import {Hero} from '@/components/sections/hero';
import {Services} from '@/components/sections/services';
import {FeaturedProjects} from '@/components/sections/featured-projects';
import {CTA} from '@/components/sections/cta';

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects locale={locale as 'fr' | 'en'} />
      <CTA />
    </>
  );
}