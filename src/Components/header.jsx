import React from 'react'
import './header.css'
import img from '../img/envatologo.png';


const Header = () => {
  return (
    <div className='header_top w-[vw] flex bg-[#262626] fixed z-20' style={{right:0, left:0}}>
        <div className='header_left w-4/5'>
            <div className='header_logo w-[14%] ms-6 pt-4 pb-4'>
                <img src={img} alt="logo"  className=''/>
            </div>
        </div>
        <div className='header_right w-1/5'>
            <button  className='buy_button bg-[#7AA93C] text-[white] ps-4 pe-4 pt-1 pb-1 rounded-[5px] me-10 mt-3 mb-3'><a href="https://codecanyon.net/checkout/102302915/create_account?_ga=2.22840059.1102821095.1715939026-1356965536.1715939026" target="_blank" rel="noopener noreferrer">Buy Now</a> </button>
        </div>
    </div>
  )
}

export default Header