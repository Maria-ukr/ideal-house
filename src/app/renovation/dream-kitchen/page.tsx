"use client";

import { usePathname } from 'next/navigation';
import pagesData from "@/src/data.json";
import Image from 'next/image';
import Link from 'next/link';

type PageDataKey = keyof typeof pagesData;

interface KitchenPageContent {
  title: string;
  subtitle: string;
  bgImage: string;
  kitchenAbout: string;
  kitchenDescriptions: {
    leftImg: string;
    rightImg: string;
    tablet: {
      tabletTitle: string;
      rows: Array<{ one: string; two: string }>;
    };
  };
  kitchenTarget: {
    desc: string;
    image: string;
    imageFull: string;
  };
  kitchenCollections: {
    title: string;
    desc: string;
    fileTitle: string;
    fileLink: string;
  };
  projects: Array<{title: string; image: string; link: string;}>;
}

function Page() {
  const pathname = usePathname();

  const pathSegments = pathname.replace(/^\/+|\/+$/g, '').split('/');

  const pageSlug = (pathSegments[pathSegments.length - 1] || "home") as PageDataKey;

  const pageContent = pagesData[pageSlug] as KitchenPageContent;
  const {tabletTitle, rows} = pageContent.kitchenDescriptions.tablet;

  return (
    <main className="pb-20 flex flex-col gap-20 md:gap-40 w-full min-h-full bg-secondary-foreground text-white">
      <section className="flex flex-1 min-h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat darken-bg" style={{backgroundImage: `url(${pageContent.bgImage})`}}>
        <div className="container w-full md:w-3/4 lg:w-1/2 z-2">
          <h1 className='mb-8 uppercase text-6xl max-md:text-4xl tracking-tight text-background text-center'>{pageContent.title}</h1>
          <p className='text-sm leading-4 text-background text-center in-brackets'>{pageContent.subtitle}</p>
        </div>
      </section>
      <section className="container">
        <p className='max-w-lg mx-auto in-brackets'>{pageContent.kitchenAbout}</p>
      </section>
      <section>
        <div className="flex max-md:flex-col justify-between gap-10">
          <div className="w-full md:w-1/3 mt-10">
            <Image 
              src={pageContent.kitchenDescriptions.leftImg} 
              width="498"
              height="622"
              alt=""
              className="w-md h-2xl object-center object-cover aspect-4/8"
            />
          </div>
          <div className="w-full md:w-2/3 mr-4">
            <div className="aspect-4/5 overflow-hidden max-w-xs ml-auto mb-32">
              <Image 
                src={pageContent?.kitchenDescriptions.rightImg} 
                width="500"
                height="500"
                alt=""
                className="h-auto w-full object-center object-cover"
              />
            </div>
            <div className="container max-w-[60rem]">
              {rows.length > 0 && (<div className="flex flex-col md:grid md:grid-cols-3 gap-8 border-t-2 border-accent pt-8">
                <p>{tabletTitle}</p>
                <div className='grid col-span-2 grid-cols-subgrid gap-8 max-md:ml-10'>
                  <p>{rows[0].one}</p>
                  <p>{rows[0].two}</p>
                </div>
              </div>)}
              {rows.length > 1 && rows.slice(1).map((row, i: number) => {
                return (<div key={i} className="flex flex-col md:grid md:grid-cols-3 gap-8 mt-8">
                  <div className='col-span-2 col-start-2 grid grid-cols-subgrid gap-8 border-t-2 border-accent pt-8 max-md:ml-10'>
                    <p>{row.one}</p>
                    <p>{row.two}</p>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-start md:justify-end items-end gap-10 md:gap-20 ml-4">
        <p className="max-w-full md:max-w-60 h-fit in-brackets">{pageContent.kitchenTarget.desc}</p>
        <div className=" md:w-2/3 aspect-10/6 overflow-hidden">
          <Image 
            src={pageContent.kitchenTarget.image} 
            width="498"
            height="622"
            alt=""
            className="size-full object-center object-cover"
          />
        </div>
      </section>
      <section>
        <div className="w-full aspect-[16/9]">
          <Image 
            src={pageContent.kitchenTarget.imageFull} 
            width="498"
            height="622"
            alt=""
            className="size-full object-center object-cover"
          />
        </div>
      </section>
      <section className='container flex max-md:flex-col justify-between gap-10'>
        <div className="max-w-160">
          <h3 className="uppercase text-6xl max-md:text-4xl mb-14">{pageContent.kitchenCollections.title}</h3>
          <p className="max-w-xl in-brackets">{pageContent.kitchenCollections.desc}</p>
        </div>
        <div>
          <div>
            <Link href={pageContent?.kitchenCollections?.fileLink || '#'} className='underline text-xl collections-link download-icon'>{pageContent.kitchenCollections.fileTitle}</Link>
          </div>
        </div>
      </section>
      <section className='container'>
        <ul className="ml-auto max-w-5/6 projects-types__list">
          {pageContent?.projects && pageContent?.projects?.map((el, i) => {
            return (<li key={i+1} className="border-y-1 divide-x border-ring projects-types__item">
              <a href={el.link} className="py-10 flex justify-between items-center uppercase text-6xl h4 opacity-50 hover:opacity-100 relative">
                <Image 
                  src={el.image} 
                  width="100"
                  height="150"
                  alt=""
                  className="absolute top-auto left-0 bottom-auto visible opacity-1 object-center object-cover aspect-4/8 z-1]"
                />
                <p className="z-2">{el.title}</p>
                <span className="z-2">{`/ ${(i+1) > 9 ? '' : 0}${i+1}`}</span>
              </a>
            </li>);
          })}
        </ul>
      </section>
    </main>
  )
}

export default Page;