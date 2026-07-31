'use client';

import { Button } from '@/src/components/ui/button';

function Error({error, reset}: {error: Error; reset: () => void }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mb-6'>😓 {error.message}</h2>
      <Button variant="outline" onClick={reset}>Try again</Button>
    </div>
  );
}

export default Error;