import Header from '@/src/components/Header/Header';

interface  LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <>
      <Header />
      <div className='container'>
        {children}
      </div>
    </>
  )
}

export default Layout;