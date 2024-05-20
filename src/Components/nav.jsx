import React from 'react'
import './nav.css'
import img1 from '../img/MotionArtEffect-logo.png'

const Nav = () => {
  return (

        <div className='nav mt-12' >
            <div className='logo' style={{zIndex:10}}>
                <img src={img1} alt="logo"  />
            </div>
            <div className='purchase_button' style={{zIndex:10}}>
              <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target="_blank" rel="noopener noreferrer" className=' bg-transparent'>Purchase Now</a>    
            </div>
        </div>
  )
}

export default Nav