import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/checkout.css'
import { FaApplePay, FaCar, FaCcMastercard, FaCcVisa, FaDragon, FaHelicopter,  FaMotorcycle, FaTruck,} from 'react-icons/fa';


function Checkout({ items, sum }) {



  console.log(items)


  return (
    <>


      <div className='checkout wrapper'>
        {items.length < 1 ?
          <div className='no-products-container'>
            <h3 className='no-products-text'>There are no products.</h3>
            <Link to="/"><button className='home-chekout-btn'>Home</button></Link>
          </div>



          :
          <div className='parent-all'>
            <div className='chekout-product-parent'>
              <h2 className='checkout-name'>Checkout</h2>
              {items.map(i => (
                <table className='checkout-table-parents'>
                  <tr className='chekout-tr'>
                  <td><img src={i.url} alt="Image" className='chekout-bild'></img></td>
                    <td className='checkout-x-text'><h3 className='i-title'>{i.title}</h3></td>
                   <td className='chekout-price'><h4 className='i-price'>{i.price} SEK</h4></td>
                  </tr>
                </table>
              ))}
            </div>

            <div className='input-chekout-container'>

              <h2>Payment Information</h2>

              <label>First Name:</label>
              <input type='text' name='firstname' className='c-name' id='chekout-form' />



              <label>Last Name:</label>
              <input type='text' name='lastname' className='c-lastname' id='chekout-form' />



              <label>Phone Number:</label>
              <input type='number' name='phonenumber' className='c-phone' id='chekout-form' />




              <label>Address:</label>
              <input type='text' name='address' className='c-address' id='chekout-form' />



              <label>City:</label>
              <input type='text' name='city' className='c-city' id='chekout-form' />



              <label>State:</label>
              <input type='text' name='state' className='c-state' id='chekout-form' />



              <label>Zip Code:</label>
              <input type='number' name='zipcode' className='c-zipcode' id='chekout-form' />


             <Link to="/finish"> <button className='chekout-c-btn'>Complete</button> </Link>




              <div className='chekout-pay-part'>
                <h3>Accepted Cards</h3>
                <div className='social'>
                  <a className='icon-footer'><FaCcVisa /></a>
                  <a className='icon-footer'><FaCcMastercard /></a>
                  <a className='icon-footer'><FaApplePay /></a>
                </div>
              </div>


              <div className='checkout-delivery-part'>
                <h3>Delivery Options</h3>
                <div className='delivery'>
                  <a className='icon-footer-2'><FaTruck /></a>
                  <a className='icon-footer-2'><FaMotorcycle /></a>
                  <a className='icon-footer-2'><FaCar /></a>
                  <a className='icon-footer-2'><FaHelicopter /></a>
                  <a className='icon-footer-2'><FaDragon /></a>
                </div>
              </div>
            </div>


            <div className='sum'>Total:{sum}</div>
          </div>
        }
      </div>







































    </>
  )
}

export default Checkout