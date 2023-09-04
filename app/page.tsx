import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import { FAQ } from 'components/landing/faq';
import FeatureCards from 'components/landing/feature-cards';
import Features from 'components/landing/features';
import HeroHeader from 'components/landing/hero';
import { PriceComparison } from 'components/landing/price-comparison';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <section className="container space-y-8 py-12 lg:py-20" id="features">
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <HeroHeader />
        <FeatureCards />
        <Features />
        <PriceComparison />
        <FAQ/>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </section>
  );
}
