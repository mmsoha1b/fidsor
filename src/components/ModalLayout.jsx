import React from 'react'

export default function ModalLayout({children}) {
  return (
    <div className='z-[1] absolute top-0 h-full w-full border-gray-400 bg-[rgba(156,163,175,0.9)]'>
      {children}
    </div>
  )
}
