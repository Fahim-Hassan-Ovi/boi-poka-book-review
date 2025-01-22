import React from 'react'
import pageImage from '../../assets/page-not-found.jpg'
export const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center'>
        <img src={pageImage} alt="" />
        <h2 className='text-5xl'>Page Not Found</h2>
    </div>
  )
}
