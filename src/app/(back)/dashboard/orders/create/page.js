import Link from 'next/link'

export const metadata = {
  title: 'Add Order',
}

export default function AddOrderPage() {
  return (
    <>
      <h3>
        Create single Order page
      </h3> 

      <Link href="/orders">&larr; Back to orders</Link>
    </>
  );
}
