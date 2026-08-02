"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import {PageContactContent} from '@/src/types/index';

import pagesData from '@/src/data.json';
import { CONSTANTS } from '@/src/constants';

const pageContent = pagesData["about"] as PageContactContent;

const layoutStyles = [
  { width: "w-[300px] md:w-[500px]", height: "h-[80vh] max-md:h-[70vh]" },
  { width: "w-[150px] md:w-[280px]", height: "h-[40vh] max-md:h-[50vh]" },
  { width: "w-[350px] md:w-[560px]", height: "h-[80vh] max-md:h-[60vh]" },
  { width: "w-[220px] md:w-[380px]", height: "h-[60vh] max-md:h-[65vh]" },
];

function Page() {
  const {BASE_URL} = CONSTANTS;

  const targetRef = useRef<HTMLDivElement | null>(null);
  const sloganRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const [scrollRange, setScrollRange] = useState(0);

  useLayoutEffect(() => {
    const calculateScroll = () => {
      if(galleryRef.current) {
        const totalGalleryWidth = galleryRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(totalGalleryWidth - viewportWidth);
      }
    };

    calculateScroll();
    window.addEventListener('resize', calculateScroll);
    return () => window.removeEventListener('resize', calculateScroll);
  }, [pageContent]);

  const {scrollYProgress} = useScroll({
    target: targetRef, 
    offset: ["start start", "end end"]
  });
  const x = useTransform(scrollYProgress, [0,1], [0, -scrollRange]);
  const {scrollYProgress: sloganScrollYProgress} = useScroll({
    target: sloganRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(sloganScrollYProgress, [0, 1], ["10%", "-250%"]);
  const xRight = useTransform(sloganScrollYProgress, [0, 1], ["-200%", "250%"]);

  return (
    <>
      <Header />
      <main className="flex flex-col w-full min-h-full m-0 relative">
        <section className="flex flex-1 min-h-dvh w-full flex-col items-center justify-center home-page__hero darken-bg" style={{backgroundImage:`url(${BASE_URL}${pageContent?.bgImage})`}}>
          <div className="container flex flex-col items-center justify-center h-screen w-full md:w-3/4 lg:w-1/2 relative z-3">
            <motion.h1 className='mb-4 uppercase text-7xl max-md:text-2xl max-md:leading-5 leading-7 tracking-tight text-center' 
            animate={{opacity: 1, y: 0}}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            >{pageContent?.title}</motion.h1>
            <motion.p className='mt-auto leading-4 text-center in-brackets absolute bottom-8 left-auto right-auto'
            animate={{opacity: 1, scale: 1}}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}>{pageContent?.subtitle}</motion.p>
          </div>
        </section>
        <section className='container py-30 bg-background text-foreground dark:bg-foreground dark:text-background flex flex-col gap-16'>
          <p className='uppercase text-4xl max-md:text-2xl tracking-[0.38em] font-montaga'>About us</p>
          <h2 className='mt-2 uppercase max-md:text-2xl max-md:leading-5 text-7xl tracking-wide leading-[1.4em]'>is the synthesis of emotions and functional</h2>
          <div>
            <p className='ml-auto max-w-1/ max-md:max-w-full -md:max-w-full in-brackets'>Creativity, innovation, functionality and a strife for perfection in every detail are at the core of our values. We aim at creating uncompromising quality which redefines what is possible and challenges the common and the everyday objects that surround us. Our research and development team is committed to constantly looking for new innovative ways to redefine the spaces that surround us and to design objects, furniture and architectural solutions that answer the demands of the present and the future. We always put the needs of our clients at the center in order to express their unique story in our designs and the exclusive modular furniture solutions that we manufacture for them.</p>
          </div>
          <div>
            <p className='max-w-1/2 max-md:max-w-full in-brackets'>Every year our research and development team dedicates one month to traveling in order to seek new inspiration, materials, technologies and to prototype new products in order to evolve and to provide our clients with new cutting-edge solutions. In our work and product line we break the mold and create exciting innovative designs aimed at empowering individuals to live a higher and a more satisfying quality of life.</p>
          </div>
        </section>
        <section ref={targetRef} className='relative h-[300vh]'>
          <div className='sticky top-20 flex h-[80vh] overflow-hidden'>
            <motion.div ref={galleryRef} style={{ x }} className="flex gap-16 md:gap-24 pl-8 pr-0 py-0 w-max">
              {pageContent?.gallery.map((el, i) => {
                const style = layoutStyles[i % layoutStyles.length];
                const lastEl = pageContent?.gallery?.length - 1;
                return (
                <div 
                  key={i} 
                  className={`relative flex-shrink-0 ${style.height} aspect-square`}
                >
                  <div className="relative h-full w-full rounded-sm bg-neutral-900">
                    <Image 
                      src={`${BASE_URL}${el.image}`} 
                      alt={el.title}
                      fill
                      className="object-cover" 
                    />
                    <p className={`absolute top-auto bottom-0 ${i === lastEl ? 'right-auto -left-6' : '-right-6'} text-xs font-montaga uppercase tracking-wider text-white [writing-mode:vertical-rl] select-none`}>{el.title}</p>
                  </div>
                </div>
              );})}
            </motion.div>
          </div>
        </section>
        <section ref={sloganRef} className='w-full overflow-hidden py-24 whitespace-nowrap'>
          {pageContent?.slogan.map((el, i) => {
            if(i % 2 === 0) {
              return (<motion.p key={i} style={{ x: xLeft }}className='whitespace-nowrap text-6xl uppercase tracking-wider font-montaga'>{el}</motion.p>)
            } else {
              return (<motion.p key={i} style={{ x: xRight }}className='whitespace-nowrap text-6xl uppercase tracking-wider font-montaga'>{el}</motion.p>)
            }
          })}
        </section>
        <section className='bg-background text-foreground dark:bg-foreground dark:text-background'>
          <div className='container flex flex-col gap-16 py-30'>
            <p className='max-w-1/2 max-md:max-w-full mx-auto in-brackets'>{pageContent?.sloganDesc}</p>
            <div className='flex max-md:flex-col gap-16'>
              <p className='max-w-1/2 max-md:max-w-full mx-auto in-brackets'>{pageContent?.targetText}</p>
              <Image 
                src={`${BASE_URL}${pageContent?.targetImage}`} 
                alt="image"
                width={500}
                height={500}
                className="object-cover max-md:w-full h-auto"
              />
            </div>
            <p className='max-w-1/2 max-md:max-w-full mx-auto in-brackets'>{pageContent?.targetSubtext}</p>
          </div>
        </section>
        <section className='min-h-screen flex flex-col bg-no-repeat bg-cover bg-center overflow-hidden darken-bg' style={{backgroundImage:`url(${BASE_URL}${pageContent?.footerBg})`}}>
          <div className="container flex-1 flex flex-col justify-center items-center h-full w-full md:w-5/6 lg:w-1/2 relative z-3">
            <div className="flex flex-col items-center justify-center gap-12">
              <motion.p className='leading-4 text-2xl uppercase text-center in-brackets'
              animate={{opacity: 1, scale: 1}}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}>{pageContent?.footerText}</motion.p>
              <motion.h2 className='uppercase text-7xl max-md:text-2xl tracking-tight text-center' 
              animate={{opacity: 1, y: 0}}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              >{pageContent?.footerTitle}</motion.h2>
              <Link href={pageContent?.footerButtonLink} className='uppercase flex justify-center items-center text-accent accent-circle'>{pageContent?.footerButtonText}</Link>
            </div>
          </div>
        </section>
      <div className="absolute bottom-0 right-0 left-0">
        <Footer />
      </div>
      </main>
    </>
  )
}

export default Page;