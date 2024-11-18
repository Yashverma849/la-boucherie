import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
// import classes from './loginPage.module.css';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { EMAIL } from '../../constants/patterns';

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');

  useEffect(() => {
    if (user) {
      navigate(returnUrl || '/');
    }
  }, [user, navigate, returnUrl]);

  const submit = async ({ email, password }) => {
    await login(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6">
        <Title title="Login" />
        <form onSubmit={handleSubmit(submit)} noValidate className="space-y-4">
          <Input
            type="email"
            label="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: EMAIL,
                message: 'Please enter a valid email address',
              },
            })}
            error={errors.email && errors.email.message}
          />

          <Input
            type="password"
            label="Password"
            {...register('password', {
              required: 'Password is required',
            })}
            error={errors.password && errors.password.message}
          />

          <Button type="submit" text="Login" />

          <div className="text-center">
            New user? &nbsp;
            <Link
              to={`/register${returnUrl ? `?returnUrl=${returnUrl}` : ''}`}
              className="text-primary hover:underline"
            >
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
