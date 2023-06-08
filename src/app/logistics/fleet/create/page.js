import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export default function AddFleetPage() {
  return (
    <DashboardLayout>
      <h3>
        Create single fleet page
      </h3> 

      <Link href="/logistics/fleet">&larr; Back to Fleet</Link>
    </DashboardLayout>
  );
}
