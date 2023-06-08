'use client'

import { useRouter } from 'next/navigation';
import DashboardLayout from '@/app/components/dashboard/layout';

export default function SingleInvoice({ params }) {

const router = useRouter();
  return (
    <DashboardLayout>
      <h3>
        Single Invoice page
      </h3> 

      <button type="button" onClick={() => router.push('/invoices')}>
            &larr; back to Invoices
            </button>
    </DashboardLayout>
  );
}
