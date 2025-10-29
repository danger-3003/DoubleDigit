"use client"

import React, { useState } from 'react'
import Container from '../ui/Container'
import Image from 'next/image'
import Link from 'next/link'
import { pageURLs } from '@/constants/urls'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const path = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleCloseMenu = () => {
    setShowMenu(false);
  }

  return (
    <>
      <nav className='bg-white/50 shadow-md shadow-black/10 backdrop-blur-lg fixed z-10 top-0 w-full px-5 py-2 flex items-center justify-between rounded-b-xl'>
        <Container>
          <div className='flex items-center justify-between w-full'>
            <Link href={"/"} className='w-24 h-[3.5rem] relative z-20'>
              <Image
                src="/assets/logo.png"
                fill
                alt='DoubleDigit Logo'
              />
            </Link>
            <ul className={`flex bg-white/90 sm:bg-transparent absolute sm:relative top-0 ${showMenu ? "left-0" : "-left-full"} sm:left-auto w-full sm:w-auto h-screen sm:h-auto flex-col sm:flex-row items-center sm:items-start justify-center gap-4 sm:gap-7 transition-all duration-500`}>
              {
                pageURLs.map((page, key) => (
                  <li key={key} className='w-max group'>
                    <Link href={page.link} className={`px-1 group-hover:text-primary text-gray-900 transition-all duration-300 ${path === page.link && "text-primary font-semibold"}`}>
                      {page.name}
                    </Link>
                    <div className={`bg-primary rounded-sm h-0.5 -mt-0.5 ${path === page.link ? "w-full" : "w-0 group-hover:w-full"} transition-all duration-300`}></div>
                  </li>
                ))
              }
            </ul>
          </div>
          <div
            className='absolute block sm:hidden mr-5 right-2'
            onClick={() => handleShowMenu()}
          >
            <Menu size={18} className={`${showMenu ? "hidden" : ""} text-gray-900`} />
            <X size={20} className={`${showMenu ? "" : "hidden"} text-gray-900`} />
          </div>
        </Container>
      </nav >
      <Link href={pageURLs[3].link} className='bg-primary hover:bg-secondary text-white px-5 py-1 fixed z-10 -left-8 top-[45%] rotate-90 cursor-pointer duration-300 transition-all'>
        Enquire
      </Link>
    </>
  )
}

export default Navbar