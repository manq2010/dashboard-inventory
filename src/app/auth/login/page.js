import AuthLayout from '@/app/components/auth/layout';
import Link from 'next/link';

export const metadata = {
    title: 'Login',
}

export default function LoginPage() {
  return (
    <AuthLayout>
        <h2>Login</h2>

        <Link 
        className='mt-5' 
        href="/auth/signup"
        >
            sign-up page
        </Link>
    </AuthLayout>
  );
}
