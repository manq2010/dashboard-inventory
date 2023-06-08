'use client'


import { useRouter } from 'next/navigation';

export default function SingleOrder({ params }) {

const router = useRouter();
  return (
    <div>
      <h3>
        Single Order page
      </h3> 

      <button type="button" onClick={() => router.push('/orders')}>
            &larr; back to orders
            </button>
    </div>
  );
}
