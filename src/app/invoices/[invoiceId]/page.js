'use client'


import { useRouter } from 'next/navigation';

export default function SingleInvoice({ params }) {

const router = useRouter();
  return (
    <div>
      <h3>
        Single Invoice page
      </h3> 

      <button type="button" onClick={() => router.push('/invoices')}>
            &larr; back to Invoices
            </button>
    </div>
  );
}
