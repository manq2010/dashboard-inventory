'use client'

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function Login() {
    const router = useRouter();

     // form validation rules 
     const validationSchema = Yup.object().shape({
        username: Yup.string()
        .required('Username is required'),
        password: Yup.string()
        .required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

     // get functions to build form with useForm() hook
     const { register, handleSubmit, formState } = useForm(formOptions);
     const { errors } = formState;

     function onSubmit({ username, password }) {
       
        return (<>
        </>);
    }

  return (
<div className="card">
  <h4 className="card-header">Login</h4>
  <div className="card-body">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          name="username"
          type="text"
          {...register('username')}
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.username?.message}</div>
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
      <button
        onClick={() => router.push('/auth/signup')}
        className="btn btn-link">
        Register
      </button>
    </form>
  </div>
</div>

  );
}
