import React from 'react'
import Marquee from "react-fast-marquee";

function ScrollMarquee({ children }) {
  return (
    <>
      <div className='w-full overflow-hidden'>
        <Marquee pauseOnHover autoFill className="flex items-center gap-8">
          {children}
        </Marquee>
      </div>
    </>
  )
}

export default ScrollMarquee