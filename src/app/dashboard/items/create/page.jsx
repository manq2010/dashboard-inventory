import Link from 'next/link'

export const metadata = {
  title: 'Add Item',
}

export default function AddItemPage() {
  return (
    <>
      <h3>
        Create single Item page
      </h3> 

      <Link href="/items">&larr; Back to Items</Link>
    </>
  );
}
