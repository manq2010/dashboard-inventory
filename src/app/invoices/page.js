import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
  title: 'Invoices',
}

export default function InvoicesPage() {
  return (
    <DashboardLayout>
      <h3>
        Invoices page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </DashboardLayout>
  );
}
