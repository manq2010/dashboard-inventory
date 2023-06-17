import AuthLayout from '@/app/components/auth/layout';
import Login from '@/app/components/forms/Login';
// import Link from 'next/link';

export const metadata = {
    title: 'Login',
}

export default function LoginPage() {
  return (
    <AuthLayout>
       <Login />
    </AuthLayout>
  );
}
