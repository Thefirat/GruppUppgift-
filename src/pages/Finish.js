import React from 'react'
import '../Style/finish.css'
import {motion} from "framer-motion"
import image from '../images/grönt.jpg'



function Finish() {
  return (
    <div className='finish-container'>
      <div>
        <motion.h1 
        animate={{
          rotate: 720 
        }}
        transition={{
          duration: 2,
          ease: "easeIn",
          ease: "easeOut"
        }} 
        className='div-finish'>
          <h3>Payment Approved</h3>
          <img className='finish-image' src={image} />
         
          </motion.h1>
      </div>
    </div>
  )
}

export default Finish