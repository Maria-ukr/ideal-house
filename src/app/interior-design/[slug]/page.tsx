import homeBg from '@/public/images/home-bg.jpg';

export async function generateStaticParams() {
  const projects = [
    {slug: 'bedroom'},
    {slug: 'lighting-design'},
    {slug: 'residential-interior-design'},
    {slug: 'commercial-interior-design'},
  ];
  return projects.map(el => ({
    slug: el.slug,
  }))
}
async function Page({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;

  return (
    <main className="flex flex-col w-full min-h-full m-0">
        <section className="flex flex-1 min-h-dvh w-full flex-col items-center justify-center home-page__hero relative" style={{backgroundImage:`url(${homeBg.src})`}}>
          <div className="container w-full md:w-3/4 lg:w-1/2">
            <h1 className='mb-4 uppercase text-6xl max-md:text-xl max-md:leading-7 leading-14 tracking-tight text-center'>Nested page - {slug} - in Interior design</h1>
            <p className='text-sm leading-4 text-center in-brackets'>We see your entire home as an ecosystem where everything is connected and flows into each other in a harmony of perfect movements. Taking this approach, we create unique solutions through a wide variety of compositions, materials and take care to customize every detail to make your home as unique as you are.</p>
          </div>
          <p className="uppercase text-base tracking-wide absolute bottom-2">scroll</p>
        </section>
    </main>
  )
}

export default Page;