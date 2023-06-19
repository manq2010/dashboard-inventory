'use client'

import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function Login() {
    const router = useRouter();

     // form validation rules 
     const validationSchema = Yup.object().shape({
        email: Yup.string()
        .required('email is required')
        .email('must be a valid email')
        .lowercase(),
        password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

     // get functions to build form with useForm() hook
     const { register, handleSubmit, formState } = useForm(formOptions);
     const { errors } = formState;

    //  function onSubmit({ email, password }) {
      function  onSubmit({email, password}) {
      
       signIn("credentials", {
        username: email,
        password: password,
        redirect: true,
        callbackUrl: "/dashboard",
      });
        return (<>
        </>);
    }

  return (
<div className='relative bg-white px-6 pt-10 pb-8 
shadow-xl ring-1 ring-gray-900/5 sm:mx-auto 
sm:max-w-lg sm:rounded-lg sm:px-10'>
<div className="mx-auto max-w-md">
  <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
  <h1 className="text-2xl font-semibold text-gray-900">Login</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='mt-12'>
      <div className="relative">
        <input
          placeholder='test@email.com'
          name="email"
          type="email"
          {...register('email')}
          className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 
          placeholder-transparent focus:outline-none focus:border-sky-500 
          ${errors.email ? 'is-invalid' : ''}`}
        />
        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm 
        transition-all peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 
        peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className="mt-10 relative">
        <input
          name="password"
          type="password"
          placeholder='Password'
          {...register('password')}
          className={`peer h-10 w-full border-b-2 border-gray-300 
          text-gray-900 placeholder-transparent 
          focus:outline-none focus:border-sky-600 ${errors.password ? 'is-invalid' : ''}`}
        />
          <label className="absolute left-0 -top-3.5 text-gray-600 
          text-sm transition-all peer-placeholder-shown:text-base 
          peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:top-2 peer-focus:-top-3.5 
          peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <button
        disabled={formState.isSubmitting}
        className="mt-12 px-4 py-2 rounded bg-sky-500 
        hover:bg-sky-400 text-white font-semibold text-center 
        block w-full focus:outline-none focus:ring 
        focus:ring-offset-2 focus:ring-sky-500 
        focus:ring-opacity-80 cursor-pointer"
        >
        {formState.isSubmitting && (
          <span className="spinner-border spinner-border-sm me-1"></span>
          )}
        Login
      </button >
      <span
        onClick={() => router.push('/auth/signup')}
        className="mt-4 block text-sm text-center 
        font-medium text-sky-600 hover:underline 
        focus:outline-none focus:ring-2 
        focus:ring-sky-500">
        Register
      </span>
    </form>
  </div>
</div>
</div>
);
}