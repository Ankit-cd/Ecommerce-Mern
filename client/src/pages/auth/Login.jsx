
import FormTemplate from '@/components/common/FormTemplate';
import { loginFormControls } from '@/config';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className="text-center">
        <h1 className='text-3xl font-bol tracking-tight text-foreground'>Sign in to your account</h1>
        <p className='mt-2'>Don't have an account? <Link to="/auth/register" className="text-primary hover:underline ml-2 font-medium">Register</Link></p>
      </div>
      <FormTemplate 
      formControls={loginFormControls}
      buttonText={'Login'}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit} />
    </div>
  )
}

export default Login
