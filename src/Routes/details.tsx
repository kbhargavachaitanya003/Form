import React from 'react'
import { useFormStore } from '../Store/FormStore'
import '../Styles/details.css'

const Details = () => {
  const formData = useFormStore((state) => state.formData);
  return (
    <div className='container'>
      <h1>Your Details</h1>
      <p>Name: {formData?.name}</p>
      <p>Email: {formData?.email}</p>
      <p>Phone: {formData?.phone}</p>
      <p>Age: {formData?.age}</p>
      <p>Gender: {formData?.gender ? 'Female' : 'Male'}</p>
    </div>
  )
}

export default Details
