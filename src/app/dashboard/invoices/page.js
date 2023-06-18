import Link from 'next/link'

export const metadata = {
  title: 'Invoices',
}

export default function InvoicesPage() {
  return (
    <>
      <h3>
        Invoices page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </>
  );
}
