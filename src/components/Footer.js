import React from 'react'
import '../Style/footer.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';




function Footer() {
  return (
    <footer className='footer-container'>
      <Link to='/' className='logo-footer'><h3>G-Seven Tech</h3></Link>
      <div className='about'>
        <h4>About us</h4>
        <p className='text'>
        Today we are one of Sweden's largest growing e-commerce in electronics.
         G-Seven Tech Sweden belongs to the Stockholm Group, 
         which is Europe's largest electronics chain with over 1000 customers in 15 European countries.
        </p>
      </div>
      <div className='contact'>
        <h4>Contact</h4>
        
          <div className='social'>
          <a href='https://sv-se.facebook.com/' className='icon-footer'><FaFacebook/></a>
          <a href='https://www.instagram.com/' className='icon-footer'><FaInstagram/></a>
          <a href='https://www.youtube.com/watch?v=WnBP8sIUShg' className='icon-footer'><FaYoutube/></a>
          </div>
      
      </div>
      <div className='address'>
        <h4>Address</h4>
           <p> Gustavslundsvägen 151 D, 167 51 Bromma</p>
           <p>&copy; 2022</p>
      </div>


    </footer>
  )

}
    

export default Footer