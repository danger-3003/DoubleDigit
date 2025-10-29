import React from 'react'

function Container({ children }) {
  return (
    <>
      <div className='flex items-center justify-center w-full'>
        <div className='max-w-[90rem] w-full flex items-center justify-center flex-col px-3 sm:px-5 lg:px-8 xl:px-10'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Container