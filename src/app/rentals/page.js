import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
    title: 'rentals',
}

export default function RentalPage() {
  return (
    <DashboardLayout>
      <h3>
        Rentals page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </DashboardLayout>
  );
}
