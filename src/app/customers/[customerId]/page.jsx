'use client'

import DashboardLayout from '@/app/components/dashboard/layout';
import { useRouter } from 'next/navigation';

export default function SingleCustomer({ params }) {

const router = useRouter();
  return (
    <DashboardLayout>
      <h3>
        Single Customer page
      </h3> 

      <button type="button" onClick={() => router.push('/customers')}>
            &larr; back to customers
            </button>
    </DashboardLayout>
  );
}
