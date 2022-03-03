import React from 'react'
import '../Style/checkout.css'


function Checkout(items) {



  return (
    <div>
        
      <div className='chekout-in'>
        <h2>Payment Information</h2>
      </div>
      <div className='checkout-name'>
        <label>First Name:</label>
        <input type='text' name='firstname' className='c-name' />
      </div>

      <div className='checkout-lastname'>
        <label>Last Name:</label>
        <input type='text' name='lastname' className='c-lastname' />
      </div>

      <div className='checkout-phone'>
        <label>Phone Number:</label>
        <input type='number' name='phonenumber' className='c-phone' />
      </div>

      <div className='checkout-email'>
        <label>Email Address:</label>
        <input type='text' name='emailaddress' className='c-email' />
      </div>

      <div className='checkout-address'>
        <label>Full Address:</label>
        <input type='text' name='address' className='c-address' />
      </div>

      <div className='checkout-city'>
        <label>City:</label>
        <input type='text' name='city' className='c-city' />
      </div>

      <div className='checkout-state'>
        <label>State:</label>
        <input type='text' name='state' className='c-state' />
      </div>

      <div className='checkout-zipcode'>
        <label>Zip Code:</label>
        <input type='number' name='zipcode' className='c-zipcode' />


        <input type="submit" value="Complete" className='c-btn'></input>
      </div>




















    </div>
  )
}

export default Checkout