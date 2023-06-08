import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
  title: 'Add Invoice',
}

export default function AddInvoicePage() {
  return (
    <DashboardLayout>
      <h3>
        Create single Invoice page
      </h3> 

      <Link href="/orders">&larr; Back to orders</Link>
    </DashboardLayout>
  );
}
