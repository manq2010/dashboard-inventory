import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h3>
        Create single Invoice page
      </h3> 

      <Link href="/orders">&larr; Back to orders</Link>
    </div>
  );
}
