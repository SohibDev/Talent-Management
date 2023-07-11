import React from 'react'
import './registerFirstForm.css'
import People from "../../../images/imagePeople.png" ;

const RegisterFirstForm = () => {
  return (
    <div className="register-first-form">
        <div className="form-header">
            <img src={People} className="form-image" />
        </div>
        <form className="form-container">
            <label htmlFor='first-name' className="form-label">First name</label>
            <input type="text" placeholder='Your First name' className="form-input" />
            <label htmlFor='last-name' className="form-label">Last name</label>
            <input type="text" placeholder='Your Last name' className="form-input" />
            <label htmlFor='email' className="form-label">Email</label>
            <input type="text" placeholder='Your email address' className="form-input" />
            <label htmlFor='country' className="form-label">Country</label>
            <input type="text" placeholder='Your country' className="form-input" />
            <label htmlFor='phoneNumber' className="form-label">Phone number</label>
            <input type="text" placeholder='Your Phone number' className="form-input" />

            <button className="form-button">Next</button>
        </form>
    </div>
  )
}

export default RegisterFirstForm
