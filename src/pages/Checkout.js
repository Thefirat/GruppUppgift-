import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/checkout.css'


function Checkout({items}) {



  console.log(items)


  return (
    <>
      

      <div className='wrapper'>
        <div className='products'>
        {items.length < 1 ? 
          <div>
        <h3>Det finns inga produkter</h3> 
        <Link to="/"><button>back</button></Link>

        </div>
        
        
        
        : 
        <div className='product'>

          <h3>det finns några produkter:</h3>
          {items.map(i => (
            <table>
              <tr className='chekout-tr'>
            <td>{i.title}</td>
            <td><img src={i.url} alt="Image" className='chekout-bild'></img></td>
            <td>{i.price}</td>
            </tr>
            </table>
          
          ))}
        </div>
      }
        </div>
        <div className='paymnet'>
        <div className='chekout-in'>
        <h2>Payment Information</h2>
      </div>
    
      <div className='checkout-name checkout-input'>
        <label>First Name:</label>
        <input type='text' name='firstname' className='c-name' id='chekout-form' />
      </div>

      <div className='checkout-lastname checkout-input'>
        <label>Last Name:</label>
        <input type='text' name='lastname' className='c-lastname' id='chekout-form' />
      </div>

      <div className='checkout-phone checkout-input'>
        <label>Phone Number:</label>
        <input type='number' name='phonenumber' className='c-phone' id='chekout-form' />
      </div>

      <div className='checkout-email checkout-input'>
        <label>Email Address:</label>
        <input type='text' name='emailaddress' className='c-email' id='chekout-form' />
      </div>

      <div className='checkout-address checkout-input'>
        <label>Full Address:</label>
        <input type='text' name='address' className='c-address' id='chekout-form' />
      </div>

      <div className='checkout-city checkout-input'>
        <label>City:</label>
        <input type='text' name='city' className='c-city' id='chekout-form' />
      </div>

      <div className='checkout-state checkout-input'>
        <label>State:</label>
        <input type='text' name='state' className='c-state' id='chekout-form' />
      </div>

      <div className='checkout-zipcode checkout-input'>
        <label>Zip Code:</label>
        <input type='number' name='zipcode' className='c-zipcode' id='chekout-form' />


        <input type="submit" value="Complete" className='c-btn'></input>
      </div>
        </div>
      </div>
    

      
      











      
    



















    </>
  )
}

export default Checkout