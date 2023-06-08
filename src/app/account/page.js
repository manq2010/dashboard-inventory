import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';


export const metadata = {
    title: 'Account',
}

export default function AccountPage() {
  return (
    <DashboardLayout>
      <h3>
        Accounts page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </DashboardLayout>
  );
}
