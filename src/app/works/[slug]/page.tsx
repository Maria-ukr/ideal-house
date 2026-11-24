import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// import ProjectItem from '@/src/components/ProjectItem/ProjectItem';
import pagesData from "@/src/data.json";
import { CONSTANTS } from '@/src/constants';
import { ProjectItem } from "@/src/types/index";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.values(pagesData.works.projects).map(el => ({
    slug: el.slug,
  }))
}

async function Page({params}: {params: Promise<{slug: string}>}) {
  const {BASE_URL} = CONSTANTS;
  const {slug} = await params;

  const project: ProjectItem | undefined =
    pagesData.works.projects[slug as keyof typeof pagesData.works.projects];

  if (!project) {
    notFound();
  };

  return (
    <main className="pb-20 flex flex-col gap-20 md:gap-40 w-full min-h-full">
      <section className="flex flex-1 min-h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat darken-bg" style={{backgroundImage: `url(${BASE_URL}${project.heroImage})`}}>
        <div className="container w-full md:w-3/4 lg:w-1/2 z-2">
          <h1 className='mb-8 uppercase text-6xl max-md:text-4xl tracking-tight text-center'>{project.title}</h1>
          <p className='text-sm leading-4 text-center in-brackets'>{project.subtitle}</p>
        </div>
      </section>
      <section className="container">
        <p className='max-w-lg mx-auto in-brackets'>{project.introDescription}</p>
      </section>
    </main>
  )
}

export default Page;