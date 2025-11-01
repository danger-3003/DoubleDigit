import React from 'react'
import Marquee from "react-fast-marquee";

function ScrollMarquee({ children }) {
  return (
    <>
      <Marquee>
        {children}
      </Marquee>
    </>
  )
}

export default ScrollMarquee