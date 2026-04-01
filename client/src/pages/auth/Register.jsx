
import FormTemplate from '@/components/common/FormTemplate';
import { registerFormControls } from '@/config';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className="text-center">
        <h1 className='text-3xl font-bol tracking-tight text-foreground'>Create New Account</h1>
        <p className='mt-2'>Already has an account? <Link to="/auth/login" className="text-primary hover:underline ml-2 font-medium">Login</Link></p>
      </div>
      <FormTemplate 
      formControls={registerFormControls}
      buttonText={'Create Account'}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit} />
    </div>
  )
}

export default Register
