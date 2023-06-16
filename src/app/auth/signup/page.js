import AuthLayout from '@/app/components/auth/layout';
import Link from 'next/link';
Link

export const metadata = {
    title: 'Sign Up',
}

export default function SignUpPage() {
  return (
    <AuthLayout>
        <h2>Sign up</h2>

        <Link 
        className='mt-5' 
        href="/auth/login"
        >
        login page
        </Link>
    </AuthLayout>
  );
}
