'use client'


import { useRouter } from 'next/navigation';

export default function SingleCustomer({ params }) {

const router = useRouter();
  return (
    <div>
      <h3>
        Single Customer page
      </h3> 

      <button type="button" onClick={() => router.push('/customers')}>
            &larr; back to customers
            </button>
    </div>
  );
}
