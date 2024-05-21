import React from 'react'
import './landingpage.css'

const LandingPage = () => {
  return (
    <div className='container'>

        <div className='left'>
            <div className = 'contentbox' style={{zIndex:10}}>
                <div className='item1' >Transform</div>
                <div className='item2' >Your Website</div>
                <div>With Motion Art Effect</div>
            </div>
        </div>


        <div className='right'>
            
                <div className='headline'  style={{zIndex:10}}>
                    Attract Your Visitors Attention With Colorful
                    <p>Motion Art Effcet</p>
                </div>
                <div className='sub-headline' style={{zIndex:10}}>
                Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
                </div>
        </div>
        
    </div>
  )
}

export default LandingPage