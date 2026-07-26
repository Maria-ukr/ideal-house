import Form from 'next/form';
import Link from 'next/link';
import Footer from '@/src/components/Footer/Footer';
import Header from '@/src/components/Header/Header';

import pagesData from "@/src/data.json";
import { CONSTANTS } from '@/src/constants';
import { PageContent } from "@/src/types/index";

function Page() {
  const pageContent = pagesData['contact'] as PageContent;
    const {BASE_URL} = CONSTANTS;
  return (
    <>
      <Header />
      <main className='relative min-h-screen flex flex-col justify-center m-0 bg-cover bg-center bg-no-repeat darken-bg' style={{backgroundImage: `url(${BASE_URL}${pageContent.bgImage})`}}>
        <div className='container mt-20 flex max-lg:flex-col gap-20 relative z-2'>
          <div className='flex-1'>
            <h1 className='text-5xl uppercase mb-6  max-lg:text-center'>{pageContent.title}</h1>
            <div className='flex gap-8 max-lg:justify-center max-md:flex-col max-md:items-center'>
              <div className='flex flex-col gap-2'>
                <p>{pageContent.address}</p>
                <p>{pageContent.office}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <Link href={`tel:${pageContent.phone}`}>{pageContent.phone}</Link>
                <Link href={`mailto:${pageContent.phone}`}>{pageContent.email}</Link>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <Form action="#" className='flex flex-col items-start gap-8 contact-page__form'>
              <div className="uppercase relative w-full leading-none">
                <input type="text" name="name" placeholder=" " className="border-b-1 border-accent w-full focus:outline-0" />
                <label className="uppercase absolute left-0 top-0">name</label>
              </div>
              <div className='flex justify-between gap-8 w-full max-md:flex-col'>
                <div className="uppercase relative w-full">
                  <input type="text" name="email" placeholder=" " className="border-b-1 border-accent w-full focus:outline-0" />
                  <label className="uppercase absolute left-0 top-0">email</label>
                </div>
                <div className="uppercase relative w-full">
                  <input type="text" name="phone" placeholder=" " className="border-b-1 border-accent w-full focus:outline-0" />
                  <label className="uppercase absolute left-0 top-0">phone</label>
                </div>
              </div>
              <div className="uppercase relative w-full">
                <input type="text" name="message" placeholder=" " className="border-b-1 border-accent w-full focus:outline-0" />
                <label className="uppercase absolute left-0 top-0">message</label>
              </div>
              <button type="submit" className="uppercase text-accent max-lg:mx-auto accent-circle">send form</button>
            </Form>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Page;