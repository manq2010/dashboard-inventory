import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
  title: 'Orders',
}

export default function OrdersPage() {
  return (
    <DashboardLayout>
      <h3>
        Orders page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </DashboardLayout>
  );
}
