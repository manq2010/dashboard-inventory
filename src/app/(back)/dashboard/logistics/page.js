import Link from 'next/link'

export const metadata = {
  title: 'Logistics',
}

export default function LogisticsPage() {
  return (
    <>
      <h3>
        Logitics page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </>
  );
}
