import Link from 'next/link'

export const metadata = {
  title: 'Add Invoice',
}

export default function AddInvoicePage() {
  return (
    <>
      <h3>
        Create single Invoice page
      </h3> 

      <Link href="/orders">&larr; Back to orders</Link>
    </>
  );
}
