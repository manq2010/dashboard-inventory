import Link from 'next/link'

export const metadata = {
  title: 'Orders',
}

export default function OrdersPage() {
  return (
    <>
      <h3>
        Orders page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </>
  );
}
