import Link from 'next/link'

export const metadata = {
  title: 'Kanban',
}

export default function KanbanPage() {
  return (
    <>
      <h3>
        Kanban Board page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </>
  );
}
