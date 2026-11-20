import React from 'react'
import Left_content from './Left_content'
import Right_content from './Right_content'

const Page1content = (props) => {
  return (
    <div className=' flex items-center px-18 pb-16 pt-10 gap-2  w-full h-[120vh]'>\
      
      <Left_content />
      <Right_content user={props.user} />
        
    </div>
  )
}

export default Page1content
