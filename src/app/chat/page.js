import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
    title: 'Chat',
}

export default function ChatPage() {
  return (
    <DashboardLayout>
      <h3>
        Chat page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </DashboardLayout>
  );
}
