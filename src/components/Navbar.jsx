import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className='mb-5 flex items-center justify-between py-6 '>
            <div className='flex flex-shrink-0 items-center'>
                <img src="" alt="logo" className='mx-2 w-10' />
            </div>
            <div className='m-8 flex items-center justify-normal gap-4 text-2xl'>
                <FaLinkedin />
                <FaFacebook />
                <FaInstagramSquare />
                <FaGithubSquare />
            </div>

        </nav>
    )
}

export default Navbar