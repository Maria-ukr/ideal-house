import Form from 'next/form';
import Link from 'next/link';
import Footer from '@/src/components/Footer/Footer';
import Header from '@/src/components/Header/Header';
import pagesData from "@/src/data.json";

interface PageContent {
  title: string;
  address: string;
  office: string;
  phone: string;
  email: string;
  bgImage: string;
}

function Page() {
  const pageContent = pagesData['contact'] as PageContent;
  const basePath = process.env.NODE_ENV === "production" ? "/" : "";
  return (
    <>
      <Header />
      <main className='relative min-h-screen flex flex-col justify-center m-0 bg-cover bg-center bg-no-repeat darken-bg' style={{backgroundImage: `url(${basePath}${pageContent.bgImage})`}}>
        <div className='container mt-20 flex gap-20 relative z-2'>
          <div className='flex-1'>
            <h1 className='text-5xl uppercase mb-6'>{pageContent.title}</h1>
            <div className='flex gap-8'>
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
            <Form action="#" className='flex flex-col items-start gap-8'>
              <div className="uppercase relative w-full">
                <label className="uppercase absolute">name</label>
                <input type="text" name="name" className="border-b-1 border-accent w-full" />
              </div>
              <div className='flex justify-between gap-8 w-full'>
                <div className="uppercase relative w-full">
                  <label className="uppercase absolute">email</label>
                  <input type="text" name="email" className="border-b-1 border-accent w-full" />
                </div>
                <div className="uppercase relative w-full">
                  <label className="uppercase absolute">phone</label>
                  <input type="text" name="phone" className="border-b-1 border-accent w-full" />
                </div>
              </div>
              <div className="uppercase relative w-full">
                <label className="uppercase absolute">message</label>
                <input type="text" name="message" className="border-b-1 border-accent w-full" />
              </div>
              <button type="submit" className="uppercase text-accent">send form</button>
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