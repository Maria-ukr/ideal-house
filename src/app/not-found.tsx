import { Button } from '../components/ui/button'
import Link from 'next/link'
import Header from '../components/Header/Header'

function NotFound() {
  return (
    <>
    <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">404</h1>
        <p className="text-muted-foreground text-sm">
          This page could not be found.
        </p>
        <Button variant="outline">
          <Link href="/">Back home</Link>
        </Button>
      </main>
    </>
  )
}

export default NotFound