import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
    title: 'Customers',
}

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <h3>
        Customers page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </DashboardLayout>
  );
}
