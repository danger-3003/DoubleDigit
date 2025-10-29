import React from 'react'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'

function WithNavbarFooter({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default WithNavbarFooter