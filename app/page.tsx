import { Banner } from 'components/banner';
import { Carousel } from 'components/carousel';
import { CollectionSection } from 'components/collection-section';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Banner />
      {/* <ThreeItemGrid /> */}
      <CollectionSection />
      <Carousel />
      <Footer />
    </>
  );
}
