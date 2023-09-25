import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className='main-form'>
        <form action="">
            <input type="text" placeholder='Enter your Name' />
            <input type="text" placeholder='Enter Your Email'/>
            <textarea cols="30" rows="10" placeholder='Enter your massege'></textarea>
            <button>send Message</button>
        </form>
    </div>
  )
}

export default ContactUs