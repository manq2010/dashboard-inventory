import Link from 'next/link'

export const metadata = {
    title: 'Account',
}

export default function AccountPage() {
  return (
    <>
      <h3>
        Accounts page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </>
  );
}
