import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
    title: 'Analytics',
}

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <h3>
      Analytics Page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </DashboardLayout>
  );
}
