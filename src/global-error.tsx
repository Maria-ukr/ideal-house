import { useRouter } from 'next/navigation';
import { startTransition } from 'react';
import { Button } from '@/src/components/ui/button';

function GlobalError({error, reset}: {error: Error, reset: () => void}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <html>
      <body className='flex flex-col justify-center items-center'>
        <h2 className='mb-6'>
          {error.message}
        </h2>
        <Button variant="outline" onClick={reload}>Try again</Button>
      </body>
    </html>
  );
}

export default GlobalError;