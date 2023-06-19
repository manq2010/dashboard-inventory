// import AuthLayout from '@/app/components/auth/layout';
import Signup from '@/components/forms/Signup';
// import { useSession } from 'next-auth/react';
import Link from 'next/link';

export const metadata = {
    title: 'Sign Up',
}

export default function SignUpPage() {
  return (
    <>
      <Signup />
    </>
  );
}
