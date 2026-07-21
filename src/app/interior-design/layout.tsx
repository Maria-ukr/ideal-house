import { Metadata } from 'next';
import Header from '@/src/components/Header/Header';

export const metadata: Metadata = {
  title: 'Company | Interior Design',
  description: 'Company | Interior Design - description',
}

function InteriorDesignLayout({children}: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <div className='container mt-20'>
      {children}</div>
    </>
  )
}

export default InteriorDesignLayout