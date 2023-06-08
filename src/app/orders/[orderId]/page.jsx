'use client'

import { useRouter } from 'next/navigation';
import DashboardLayout from '@/app/components/dashboard/layout';

export default function SingleOrder({ params }) {

const router = useRouter();
  return (
    <DashboardLayout>
      <h3>
        Single Order page
      </h3> 

      <button type="button" onClick={() => router.push('/orders')}>
            &larr; back to orders
            </button>
    </DashboardLayout>
  );
}
