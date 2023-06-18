import Link from 'next/link'

export const metadata = {
    title: 'Rentals',
}

export default function RentalPage() {
  return (
    <>
      <h3>
        Rentals page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </>
  );
}
