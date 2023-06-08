import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h3>
        Create single Item page
      </h3> 

      <Link href="/items">&larr; Back to Items</Link>
    </div>
  );
}
