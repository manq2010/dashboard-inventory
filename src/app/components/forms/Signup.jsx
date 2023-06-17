'use client'

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function SignUp() {
    const router = useRouter();

    // define custom dictionary
    Yup.setLocale({
        mixed: {
          default: 'field_invalid',
        },
        number: {
          min: 'must be at least ${min} characters long ',
        },
      });

    // form validation rules 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required')
            .min(3, 'must be at least 3 characters long'),
        lastName: Yup.string()
            .required('Last Name is required')
            .min(3),
        username: Yup.string()
            .required('Username is required')
            .min(3, 'must be at least 3 characters long')
            .max(50, 'must be not more than 50 characters long'),
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

    function onSubmit(user) {
        return (
            <>
            </>
        );
    }

  return (
    <div className="card">
    <h4 className="card-header">Register</h4>
    <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.firstName?.message}</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input name="email" type="email" {...register('email')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.username?.message}</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <button disabled={formState.isSubmitting} className="btn btn-primary">
                {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                Register
            </button>
            <button
                onClick={() => router.push('/auth/login')}
                className="btn btn-link">
                Cancel
            </button>
        </form>
    </div>
</div>
  );
}
