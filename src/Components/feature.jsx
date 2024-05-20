import React from 'react'
import img6 from '../img/motionarteffect-img5.png'
import './feature.css'

import { FaArrowRightLong } from "react-icons/fa6";




const Feature = () => {
  return (
    <div className='background flex'>

        <div className='left' style={{zIndex:10}}>
            <div className='fhead text-[#EEE5FF]'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</div>
            <div className='fsubhead text-[#A09BB0]'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</div>
            <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target="_blank" rel="noopener noreferrer">
            <div className='button text-[#FFFFFF] flex'>
               <p style={{background:"transparent"}}> Purchase From Envato</p> 
               <FaArrowRightLong className='arrow'  style={{background:"transparent", margin:"10px", fontSize:"1.8vmax" , fontWeight:"200"}}/></div>
              
            </a>
          </div>

        <div className='right' >
            <img src={img6} className='wand'  layout="responsive" alt="" style={{zIndex:10}}/>
        </div>
    </div>
  )
}

export default Feature