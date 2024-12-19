import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter,  } from "react-icons/fa"
const Footer = () => {
    return (
        <footer className='bg-green-600  hover:bg-green-700  px-4 md:px-16 lg:px-28 my-1 py-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h2 className='text-lg font-bold mb-4 text-white'>
                    HidroAkuaponik
                    </h2>
                </div>
                <div>
                    <h2 className='text-lg font-bold mb-4 text-white'>Link</h2>
                    <ul>
                        <li><a href="/Home" className='hover:underline text-white'>Home</a></li>
                        <li><a href="/Services" className='hover:underline text-white'>Services</a></li>
                        <li><a href="/Article" className='hover:underline text-white'>Article</a></li>
                        <li><a href="/About" className='hover:underline  text-white'>About</a></li>
                        <li><a href="/Contact" className='hover:underline text-white'>Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-bold mb-4 text-white'>Follow Us</h2>
                    <ul className='flex space-x-4'>
                        <li><FaFacebook className="text-white" />{""}
                            <a href="" className='hover:underline text-white'>
                                Facebook
                            </a>
                        </li>
                    
                        <li>
                            <FaTwitter className='text-white' />
                            <a href="" className='hover:underline text-white'>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <FaInstagram className='text-white' />
                            <a href="" className='hover:underline text-white'>Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className=' border-t border-white pt-6 text-white text-center mt-6'>
                <p>
                    @ 2024 All Right Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer;
