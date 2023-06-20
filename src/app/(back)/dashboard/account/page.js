// import Link from 'next/link'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const metadata = {
    title: 'Account',
}

export default async function AccountPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login?callbackUrl=/dashboard/account')
  }

  return (
    <section className='py-24'>
      <div className='container'>

      <h3 text-2xl font-bold>
        Accounts <span className='text-emerald-500'>server side protected</span> page
      </h3> 

      <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        <p className='mt-4'>{session?.user?.name}</p>
      {/* <Link href="/">&larr; Back Home</Link> */}
      </div>

      <pre>
      {JSON.stringify(session, null, 2)}
      </pre>
    </section>
  );
}
