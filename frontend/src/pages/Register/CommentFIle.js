/*import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import classes from './registerPage.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';
*/
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
/*import { EMAIL } from '../../constants/patterns';

export default function RegisterPage() {
  const auth = useAuth();
  const { user } = auth;
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');

  useEffect(() => {
    if (!user) return;
    returnUrl ? navigate(returnUrl) : navigate('/');
  }, [user]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submit = async data => {
    await auth.register(data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Register" />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="text"
            label="Name"
            {...register('name', {
              required: true,
              minLength: 5,
            })}
            error={errors.name}
          />

          <Input
            type="email"
            label="Email"
            {...register('email', {
              required: true,
              pattern: EMAIL,
            })}
            error={errors.email}
          />

          <Input
            type="password"
            label="Password"
            {...register('password', {
              required: true,
              minLength: 5,
            })}
            error={errors.password}
          />

          <Input
            type="password"
            label="Confirm Password"
            {...register('confirmPassword', {
              required: true,
              validate: value =>
                value !== getValues('password')
                  ? 'Passwords Do No Match'
                  : true,
            })}
            error={errors.confirmPassword}
          />

          <Input
            type="text"
            label="Address"
            {...register('address', {
              required: true,
              minLength: 10,
            })}
            error={errors.address}
          />

          <Button type="submit" text="Register" />

          <div className={classes.login}>
            Already a user? &nbsp;
            <Link to={`/login${returnUrl ? '?returnUrl=' + returnUrl : ''}`}>
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
*/
import RegisterForm from "../../components/RegisterPage/Form";
import RegisterBtn from "../../components/RegisterPage/RegisterBtn";
import RegisterLeft from "../../components/RegisterPage/RegisterLeft";
import RegisterPolicy from "../../components/RegisterPage/RegisterPolicy";
export default function LoginPage() {
  const { user, login, register } = useAuth();
  // const submit = async ({ email, password }) => {
  //   await login(email, password);
   
  // };
  // State to hold form data
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  
  const submit = async data => {
    await register(data);
  };

   // Handle input change
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex mt-12">
        <RegisterLeft/>
        <div className="w-2/3 px-4">
          <div className="border py-6 px-6 items-center justify-center register">
            <div>
              <h3 className="text-3xl font-medium">Register Here</h3>
            </div>
            <RegisterForm />
            <RegisterPolicy/>
            <RegisterBtn submit={submit}/>
          </div>
        </div>
      </div>
    </>
  );
}