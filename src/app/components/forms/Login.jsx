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
        email: email,
        password: password,
        redirect: true,
        callbackUrl: "/",
      });
        return (<>
        </>);
    }

  return (
<div className="card">
  <h4 className="card-header">Login</h4>
  <div className="card-body">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          name="email"
          type="email"
          {...register('email')}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          name="password"
          type="password"
          {...register('password')}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <button
        disabled={formState.isSubmitting}
        className="btn btn-primary "
      >
        {formState.isSubmitting && (
          <span className="spinner-border spinner-border-sm me-1"></span>
        )}
        Login
      </button >
      <span
        onClick={() => router.push('/auth/signup')}
        className="btn btn-link">
        Register
      </span>
    </form>
  </div>
</div>

  );
}
