import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <section className='bg-[#FFFFFF] pt-[65px] px-[52px]'>
        <div className='flex flex-col md:flex-row justify-between'>
            <img src={logo} className='w-[207px] h-[62px]'></img>
            <div className='flex flex-row gap-14 mt-12 md:mt-0'>
                <div>
                    <h1 className='text-[#A36229] font-bold text-xl'>Quick Links</h1>
                    <div className='mt-10 flex flex-col'>
                     <a href="" className='mt-[18px]'>About Alysia</a>
                    <a href="" className='mt-[18px]'>Speaking</a>
                    <a href="" className='mt-[18px]'>Projects & Work</a>
                    <a href="" className='mt-[18px]'>Media & Press</a>
                    <a href="" className='mt-[18px]'>Book & Writing</a>
                    <a href="" className='mt-[18px]'>Contact & Connect</a>
                    </div>
                    
                    
                </div>
                 <div>
                    <h1 className='text-[#A36229] font-bold text-xl'>Legal</h1>
                    <div className='mt-10 flex flex-col'>
                     <a href="" className='mt-[18px]'>Privacy Policy</a>
                    <a href="" className='mt-[18px]'>Terms and Conditions</a>
                    <a href="" className='mt-[18px]'>Cookie Policy</a>
                    
                    </div>
                    
                    
                </div>


            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between mt-12 '>
            <h1>©2025 Alysia Rivers. All rights reserved.</h1>
            <h1 className='mt-2 md:mt-0'>Made with ❤️ by JayTech Design Studios</h1>
        </div>
        


    </section>
  )
}

export default Footer