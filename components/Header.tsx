"use client"

import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link'
import Image from 'next/image';


function Nav() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='fixed shadow-md inset-0 bg-[#00283c] text-white h-[100px] md:px-20  flex items-center p-[15px] justify-between z-50'>
            <Link href="/" className='flex items-center'>

                <Image
                    src="/images/logoleft.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className='object-cover mt-[10px]'
                />
                <Image
                    src="/images/logoright.png"
                    alt="logo"
                    width={170}
                    height={170}
                    className='object-cover'
                />
            </Link>
            <ul className='hidden nav-ul:flex items-center justify-center gap-10  w-[50%]'>
                <Link href="/"><li className='flex items-center cursor-pointer'>Home</li></Link>
                <a href="/about"><li className='flex items-center cursor-pointer' >About Us </li></a>

                <a href="/team"><li className='flex items-center cursor-pointer' >Team </li></a>
                <a href="/careers"><li className='flex items-center cursor-pointer' >Careers </li></a>
                <a href='/contact'><li className='flex items-center cursor-pointer'>Contact</li></a>
            </ul>
            <div className="hidden nav-ul:block buttons  w-[fit-content] font-bold">

                <a href="/contact"><button className='mr-[10px] p-[20px] py-3 w-[150px] bg-[#ffd602] text-black rounded-[30px]'>Get Started</button></a>
            </div>
            {!showMenu ? <RiMenu3Line onClick={() => { setShowMenu(!showMenu) }} className='block nav-ul:hidden cursor-pointer text-xl' /> : <IoMdClose onClick={() => { setShowMenu(!showMenu) }} className='block nav-ul:hidden cursor-pointer text-xl' />}
            <AnimatePresence>
                {
                    showMenu && <motion.div
                        initial={{
                            y: -100,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        exit={{
                            y: -100,
                            opacity: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "easeInOut"
                        }}
                        className='absolute top-[100%] left-0 right-0 flex nav-ul:hidden bg-[#00283c] z-10 p-[15px]'>
                        <ul className='w-full'>
                            <Link href="/" onClick={() => { setShowMenu(false) }}><li className='flex items-center w-full justify-between mb-[20px] font-bold'>Home</li></Link>
                            <a href="/about"><li className='flex items-center cursor-pointer' >About Us </li></a>
                            <a href="/team"><li className='flex items-center cursor-pointer' >Team </li></a>
                            <a href="/careers"><li className='flex items-center cursor-pointer' >Careers </li></a>
                            <a href='/contact'><li className='flex items-center cursor-pointer'>Contact</li></a>
                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </nav>
    )
}

export default Nav