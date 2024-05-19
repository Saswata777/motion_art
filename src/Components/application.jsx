import React from 'react'
import img7 from '../img/motionarteffect-img10.png';
import img8 from '../img/motionarteffect-img11.png';
import img9 from '../img/motionarteffect-img8.png';
import './application.css'

const Application = () => {
  return (
    <div className=' w-full mt-10 mb-10'>
        <div className='flex justify-center'>
            <div className='applicationHead text-[#EEE5FF]'>Apply On Any Section Or Enable For Whole Page</div>
        </div>
        <div className='app_sec2 flex'>
            <div className='app_sec2_left w-1/2'>
                <div className='wrapper-1'>
                    <p className='wrapperhead'>Apply On Section</p>
                    <p className='wrappersubhead'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                    <img src={img8} alt="" />
                </div>
            </div>
            <div className='app_sec2_right w-1/2'>
                <div className='wrapper-2'>
                    <p className='wrapperhead'>Apply On Page</p>
                    <p className='wrappersubhead'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                    <img src={img7} alt="" />
                </div>
            </div>
        </div>
        <div className='app_sec3'>
            {/* browser support */}
            <div className='wrapper-3'>
                <div className='box'>
                    <div className='wrapper3_head'>Supported by All Popular Browsers</div>
                    <div className="wrapper3_subhead">Rest assured, Motion Art is designed to be compatible with all major web browsers.</div>
                    <div className="browser_box" style={{background:"transparent"}}>
                        <img src={img9} alt="" className='browser' />
                    </div>
                </div>
            </div>
        </div>
        <div className='app_sec4'>
            <div className='box'>
                <div className='head'>An All-Round Plugin With Powerful Features</div>
                <div className='subhead'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</div>
            </div>
        </div>
    </div>
  )
}

export default Application;