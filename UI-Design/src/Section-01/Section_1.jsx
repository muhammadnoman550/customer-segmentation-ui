import React from 'react'
import Navbar from './Navbar'
import Page1content from './Page1content'

const Section_1 = (props) => {
    
  return (
    <div className='h-screen w-full  '>
        <Navbar />
        <Page1content user={props.user} />
      
    </div>
  )
}

export default Section_1
