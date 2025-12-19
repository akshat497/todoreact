import React from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Form Submitted Successfully!');
    reset(); // clears form after submit
  };

  return (
    <div style={{ width: '300px', margin: '50px auto' }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name */}
        <div>
          <label>Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
            })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Minimum 6 characters required',
              },
            })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
