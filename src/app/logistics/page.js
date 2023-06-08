import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
  title: 'Logistics',
}

export default function LogisticsPage() {
  return (
    <DashboardLayout>
      <h3>
        Logitics page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </DashboardLayout>
  );
}
