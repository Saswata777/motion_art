import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer w-full flex'>
            <div className='copywrite w-1/2 bg-transparent p-5'>
            © 2023 Copywrite. All rights reserved by QodeMatrix
            </div>
            <div className='doc w-1/2 flex bg-transparent'>
                <div className='bg-transparent'>
                    <a href="https://qodematrix.com/docs/motion-art-for-elementor/" target="_blank" rel="noopener noreferrer" className=' bg-transparent'> Documentation</a>
                </div>
                <div className='bg-transparent'>
                    <a href="https://support.qodematrix.com/login" target="_blank" rel="noopener noreferrer" className=' bg-transparent'> Support</a>
                </div>
            </div>
    </div>
  )
}

export default Footer;