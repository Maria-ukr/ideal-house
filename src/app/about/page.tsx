"use client";

import Image from 'next/image';
import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Header from '@/src/components/Header/Header';
import {PageContactContent} from '@/src/types/index';

import pagesData from '@/src/data.json';
import { CONSTANTS } from '@/src/constants';

const pageContent = pagesData["about"] as PageContactContent;

const layoutStyles = [
  { width: "w-[400px] md:w-[500px]", height: "h-[80vh]" },
  { width: "w-[240px] md:w-[280px]", height: "h-[40vh]" },
  { width: "w-[450px] md:w-[560px]", height: "h-[80vh]" },
  { width: "w-[320px] md:w-[380px]", height: "h-[60vh]" },
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
      <main className="flex flex-col w-full min-h-full m-0">
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
            <p className='ml-auto max-w-1/2 in-brackets'>Creativity, innovation, functionality and a strife for perfection in every detail are at the core of our values. We aim at creating uncompromising quality which redefines what is possible and challenges the common and the everyday objects that surround us. Our research and development team is committed to constantly looking for new innovative ways to redefine the spaces that surround us and to design objects, furniture and architectural solutions that answer the demands of the present and the future. We always put the needs of our clients at the center in order to express their unique story in our designs and the exclusive modular furniture solutions that we manufacture for them.</p>
          </div>
          <div>
            <p className='max-w-1/2 in-brackets'>Every year our research and development team dedicates one month to traveling in order to seek new inspiration, materials, technologies and to prototype new products in order to evolve and to provide our clients with new cutting-edge solutions. In our work and product line we break the mold and create exciting innovative designs aimed at empowering individuals to live a higher and a more satisfying quality of life.</p>
          </div>
        </section>
        <section ref={targetRef} className='relative h-[300vh]'>
          <div className='sticky top-16 flex h-[80vh] overflow-hidden'>
            <motion.div ref={galleryRef} style={{ x }} className="flex gap-16 md:gap-24 pl-12 pr-32 py-6 w-max">
              {pageContent?.gallery.map((el, i) => {
                const style = layoutStyles[i % layoutStyles.length];
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
                    <p className='absolute top-0 right-[-1.5rem] text-xs font-montaga uppercase tracking-wider text-white [writing-mode:vertical-rl] select-none'>{el.title}</p>
                  </div>
                </div>
              );})}
            </motion.div>
          </div>
        </section>
        <section ref={sloganRef} className='w-full overflow-hidden py-24 whitespace-nowrap'>
          <motion.p style={{ x: xLeft }}className='whitespace-nowrap text-6xl uppercase tracking-wider font-montaga'>is the synthesis of emotions and functional innovative design.</motion.p>
          <motion.p style={{ x: xRight }}className='whitespace-nowrap text-6xl uppercase tracking-wider font-montaga'>is the synthesis of emotions and functional innovative design.</motion.p>
        </section>
      </main>
    </>
  )
}

export default Page;