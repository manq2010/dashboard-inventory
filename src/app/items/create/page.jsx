import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
  title: 'Add Item',
}

export default function AddItemPage() {
  return (
    <DashboardLayout>
      <h3>
        Create single Item page
      </h3> 

      <Link href="/items">&larr; Back to Items</Link>
    </DashboardLayout>
  );
}
