import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import Link from 'next/link';

interface  LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <section className="container text-center pt-16 pb-28">
        <h5 className="uppercase text-xl">Let&apos;s Get Started</h5>
        <p className="max-w-xl mx-auto my-4">We create unique designs and manufacture in-house at our state-of- the-art Canadian facility to meet all of your custom needs.</p>
        <p className="uppercase in-brackets">call us<Link href="tel:+11111111111">+1-111-111-1111</Link></p>
      </section>
      <Footer />
    </>
  )
}

export default Layout;