// EnquiryForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

function EnquiryForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto mt-8" id='EnquieyForm'>
      <h2 className="text-4xl font-bold mb-4 primary-color" >Enquiry Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1 text-white">Name</label>
          <input type="text" id="name" {...register('name', { required: true })} className="w-full p-2 border border-gray-300 rounded" />
          {errors.name && <p className="text-red-500">Name is required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1 text-white">Email</label>
          <input type="email" id="email" 
          
          {...register('email', { 
            required: 'Pls enter correct email',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            },
            validate: value => value.endsWith('@gmail.com') || 'Email must be Gmail'
          })} 
          
          className="w-full p-2 border border-gray-300 rounded" />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" 
            
            {...register('mobile', { 
              required: 'Mobile number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid mobile number'
              }
            })} 
           
           className="block font-bold mb-1 text-white">Mobile Number</label>
          <input type="tel" id="mobile" {...register('mobile', { required: true })} className="w-full p-2 border border-gray-300 rounded" />
          {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-1 text-white">Description</label>
          <textarea id="description" {...register('description', { required: true })} className="w-full p-2 border border-gray-300 rounded"></textarea>
          {errors.description && <p className="text-red-500">Description is required</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default EnquiryForm;
