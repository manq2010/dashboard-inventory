import Link from 'next/link'


export const metadata = {
    title: 'Chat',
}

export default function ChatPage() {
  return (
    <>
      <h3>
        Chat page
      </h3> 

      <Link href="/">&larr; Back Home</Link>
    </>
  );
}
