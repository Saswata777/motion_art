import React from 'react'
import './footerCard.css'

import img10 from '../img/motionarteffect-img6.png';
import img11 from '../img/motionarteffect-img7.png'
import img12 from '../img/motionarteffect-img9.png'

const FooterCard = () => {
  return (
    <div className='footercard'>
        <div className='footercard-1'>
            <div className='footercard_1_img'>
                <img src={img12} className='light' alt="" />
            </div>
            <div className='footercard_1_head'>
                Light Weight
            </div>
            <div className='footercard_1_subhead'>
                Motion Art for Elementor is designed to be lightweight.
            </div>
        </div>

        <div className='footercard-2'>
                <div className='footercard_2_img'>
                  <img src={img10} className='thumb' alt="" />
                </div>
                <div className='footercard_2_head'>
                    100% Responsive
                </div>
                <div className='footercard_2_subhead'>
                    Create a consistent visual experience across all devices.
                </div>
        </div>

        <div className='footercard-3'>
                <div className='footercard_3_img'>
                  <img src={img11} className='moon' alt="" />
                </div>
                <div className='footercard_3_head'>
                User Friendly Interface
                </div>
                <div className='footercard_3_subhead'>
                Ensure a smooth experience for both applicants and administrators.
                </div>
        </div>
    </div>
  )
}

export default FooterCard