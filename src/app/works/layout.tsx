import { Metadata } from 'next';
import Header from '@/src/components/Header/Header';

export const metadata: Metadata = {
  title: 'Works | Interior Design',
  description: 'Works | Interior Design - description',
}

function WorksLayout({children}: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default WorksLayout