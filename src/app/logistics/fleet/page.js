import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
  title: 'Add Fleet',
}

export default function page() {
  return (
    <DashboardLayout>
      <h3>
        Fleet page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </DashboardLayout>
  );
}
