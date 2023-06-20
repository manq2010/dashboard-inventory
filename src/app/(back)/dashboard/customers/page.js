import Link from 'next/link'

export const metadata = {
    title: 'Customers',
}

export default function CustomersPage() {
  return (
    <>
      <h3>
        Customers page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </>
  );
}
