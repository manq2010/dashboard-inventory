'use client'

import { useRouter } from 'next/navigation';

export default function SingleFleet({ params }) {

const router = useRouter();
  return (
    <>
      <h3>
        Single Fleet page
      </h3> 

      <button type="button" onClick={() => router.push('/logistics/fleet')}>
            &larr; back to Fleet
            </button>
    </>
  );
}
