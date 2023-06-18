import Link from 'next/link'

export const metadata = {
    title: 'Analytics',
}

export default function AnalyticsPage() {
  return (
    <>
      <h3>
      Analytics Page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </>
  );
}
