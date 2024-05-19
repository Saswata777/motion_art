import React from 'react'
import './testimonial.css'

// import images
import img2 from '../img/motionarteffect-img2.png' //leaf
import img3 from '../img/motionarteffect-img1.png' // O2
import img4 from '../img/motionarteffect-img3.png' // W
import img5 from '../img/motionarteffect-img4.png'  // star

const Testimonial = () => {
  return (
    <div className='mb-20 '>
        <div className='test_ flex justify-center text-[#EEE5FF] mt-20 ms-[10vmax] me-[10vmax]'>Trusted by thousands of users around the world</div>
        <div className='flex flex-wrap justify-around'>
            <div className='flex mt-20'>
                <div>
                <img src={img2} alt="" />
                </div>
                <div className=' rating'>
                    <div>
                        <img src={img5} alt="" />
                        <p style={{color:"#B3ADC3"}}>4.5 Score, 9 Reviews</p>
                    </div>
                </div>
            </div>
            <div className='flex mt-20'>
                <div>
                 <img src={img3} alt="" />
                </div>
                <div className=' rating'>
                    <div>
                        <img src={img5} alt="" />
                        <p style={{color:"#B3ADC3"}}>4.5 Score, 9 Reviews</p>
                    </div>
                </div>
            </div>
            <div className='flex mt-20'>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div className=' rating'>
                    <div>
                        <img src={img5} alt="" />
                        <p style={{color:"#B3ADC3"}}>4.5 Score, 9 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial