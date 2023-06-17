import AuthLayout from '@/app/components/auth/layout';
import Signup from '@/app/components/forms/Signup';
import Link from 'next/link';
Link

export const metadata = {
    title: 'Sign Up',
}

export default function SignUpPage() {
  return (
    <AuthLayout>
      <Signup />
    </AuthLayout>
  );
}
