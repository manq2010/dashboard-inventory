import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboard/layout';

export const metadata = {
  title: 'Kanban',
}

export default function KanbanPage() {
  return (
    <DashboardLayout>
      <h3>
        Kanban Board page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </DashboardLayout>
  );
}
