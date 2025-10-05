import React, { useState }  from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'
import { Link } from 'react-router-dom'

function NavBar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className='flex justify-between items-center px-6 py-5 md:px-[52px]'>
        <img src={logo} className='w-32 h-9'></img>

        <ul className="hidden md:flex md:space-x-6 font-semibold text-sm items-center">
        {/* <a href="#about" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl">ABOUT ALYSIA</a> */}
        {/* <a href="#speaking" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl">SPEAKING</a> */}
        <Link to="/" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl font-TTBold">HOME</Link>
        {/* <a href="#projects" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl">PROJECTS & WORK</a> */}
        <a href="/book" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl font-TTBold">BOOK & WRITING</a>
        <a href="/about" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl font-TTBold">ABOUT</a>
        <a
          href="#contact"
          className="bg-[#E0AF85] hover:bg-[#d69f70] text-gray-900 text-2xl px-4 py-4 rounded-lg font-TTBold"
        >
          BOOK ME TO SPEAK
        </a>
        </ul>

        <img src={menu} className='md:hidden w-7'cursor-pointer 
        onClick={handleMenuToggle} ></img>
        {/* Mobile Menu */}

      {isMenuOpen && (
        <ul className="md:hidden absolute top-16 left-0 right-0 bg-[#FAF2EB] px-6 py-4 flex flex-col items-center space-y-4">
          {/* <Link to="#about" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl">ABOUT ALYSIA</Link>
          <Link to="#speaking" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl">SPEAKING</Link> */}
          <Link to="/" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl font-TTBold">HOME</Link>
          {/* <Link to="#projects" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl">PROJECTS & WORK</Link> */}
          <Link to="/book" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl font-TTBold">BOOK & WRITING</Link>
          <Link to="/about" className="hover:text-[#A4693B] text-[#0B2C2C] text-xl font-TTBold">ABOUT</Link>
          <Link
            to="#contact"
            className="bg-[#E0AF85] hover:bg-[#d69f70] text-gray-900 text-2xl px-4 py-4 rounded-lg font-TTBold"
          >
            BOOK ME TO SPEAK
          </Link>
        </ul>
      )}
      

     
    </nav>
  )
}

export default NavBar