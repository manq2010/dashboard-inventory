import Link from 'next/link'

export const metadata = {
  title: 'Add Fleet',
}

export default function page() {
  return (
    <>
      <h3>
        Fleet page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </>
  );
}
