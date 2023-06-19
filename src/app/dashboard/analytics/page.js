'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
// import Link from 'next/link'

export const metadata = {
    title: 'Analytics',
}

export default function AnalyticsPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/login?callbackUrl=/dashboard/analytics')
    }
  })
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is an analytics <span className='text-emerald-500'>client-side</span>{' '}
          protected page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        <p className='mt-4'>{session?.user?.name}</p>
      </div>
    </section>
  );
}
