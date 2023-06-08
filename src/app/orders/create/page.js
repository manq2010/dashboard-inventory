import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
  title: 'Add Order',
}

export default function AddOrderPage() {
  return (
    <DashboardLayout>
      <h3>
        Create single Order page
      </h3> 

      <Link href="/orders">&larr; Back to orders</Link>
    </DashboardLayout>
  );
}
