"use client";

import Link from 'next/link';
import { useState, useMemo } from "react";
import { Mousewheel, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import pagesData from "@/src/data.json";

interface PageItem {
  key: string;
  title: string;
  category?: string;
  bgImage: string;
  link: string;
}

const EXCLUDED_KEYS = new Set(["home", "careers", "contact", "about"]);

const pageList: PageItem[] = Object.entries(pagesData as Record<string, Partial<PageItem>>).filter(([key]) => (!EXCLUDED_KEYS.has(key))).map(([key, page]) => ({
  key,
  title: page.title ?? "",
  category: page.category ?? "",
  bgImage: page.bgImage ?? "",
  link: page.link ?? '/',
}));

const basePath = process.env.NODE_ENV === "production" ? "/ideal-house" : "";

interface PageItem {
  key: string;
  title: string;
  category?: string;
  bgImage: string;
  link: string;
}

function ServicesSlider() {
  const [activeTitle, setActiveTitle] = useState(pageList[0]?.title || "");

  const slides = useMemo(() => {
    if (pageList.length > 0 && pageList.length < 6) {
      return [...pageList, ...pageList, ...pageList];
    }
    return pageList;
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden select-none">
      
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <h2 className="text-4xl font-serif uppercase text-center tracking-widest sm:text-6xl md:text-3xl drop-shadow-lg transition-all duration-500 max-w-1/2">
          {activeTitle}
        </h2>
      </div>

      <div className="flex h-full w-full items-center justify-center">
        <Swiper
          modules={[Mousewheel, Pagination, A11y]}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={300}
          loop={true}
          mousewheel={true}
          onSlideChange={(swiper: SwiperType) => {
            const realIdx = swiper.realIndex % pageList.length;
            setActiveTitle(pageList[realIdx]?.title || "");
          }}
          className="h-full w-full overflow-visible!"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex! h-full w-auto! items-center justify-center transition-all duration-500 group"
            >
              <Link href={slide.link}
                className="relative flex flex-col items-center justify-center transition-all duration-700 ease-out opacity-30 scale-80 blur-[1px] [.swiper-slide-active_&]:opacity-100 [.swiper-slide-active_&]:scale-100 [.swiper-slide-active_&]:blur-[0px]"
              >
                <p className="absolute -left-16 top-[10%] -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.3em] uppercase opacity-60 whitespace-nowrap">
                  {slide.category}
                </p>
                <div className="relative h-[75vh] w-[280px] sm:w-[350px] md:w-[420px] overflow-hidden shadow-2xl">
                  <img
                    src={`${basePath}${slide.bgImage}`}
                    alt={slide.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <p className="absolute -right-12 top-[10%] -translate-y-1/2 rotate-90 text-[10px] tracking-wide opacity-90 whitespace-nowrap">
                  {`${index+1 > 9 ? `${index+1}` : `0${index+1}`}`} — {`${pageList.length+1 > 9 ? `${pageList.length+1}` : `0${pageList.length+1}`}`}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ServicesSlider;