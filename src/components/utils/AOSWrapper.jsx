"use client"

import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function AOSWrapper({ children }) {

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      easing: 'ease-out-cubic',
      offset: 100,
    })
  }, []);

  return (
    <>
      {children}
    </>
  )
}

export default AOSWrapper