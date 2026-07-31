import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import ServicesSlider from '@/src/components/ServicesSlider/ServicesSlider';

import { CONSTANTS } from '@/src/constants';
import pagesData from "@/src/data.json";
import { PageHomeContent } from "@/src/types/index";
import AnimatedSection from '@/src/components/AnimatedSection/AnimatedSection';
import VideoBg from '@/src/components/VideoBg/VideoBg';

const pageContent = pagesData['home'] as PageHomeContent;

export default function Home() {
  const {BASE_URL} = CONSTANTS;
  return (
    <>
      <Header />
      <main className="flex flex-col w-full min-h-full relative m-0 h-screen overflow-y-auto snap-y snap-mandatory">
        <VideoBg videoSrc={`${BASE_URL}${pageContent?.bgVideo}`} poster={`${BASE_URL}${pageContent?.bgImage}`} />
        <section className="flex flex-1 min-h-dvh w-full flex-col items-center justify-center relative home-page__hero snap-start">
          <div className="container w-full md:w-3/4 lg:w-1/2">
            <h1 className='mb-4 uppercase text-3xl max-md:text-xl max-md:leading-5 leading-7 tracking-tight text-center'>{pageContent?.title}</h1>
            <p className='text-sm leading-4 text-center in-brackets'>{pageContent?.subtitle}</p>
          </div>
          <p className="uppercase text-base tracking-wide absolute bottom-2">scroll</p>
        </section>
        <section className="min-h-screen snap-start">
          <AnimatedSection>
            <ServicesSlider />
            <div className="absolute bottom-0 right-0 left-0">
              <Footer />
            </div>
          </AnimatedSection>
        </section>
      </main>
    </>
  );
}
