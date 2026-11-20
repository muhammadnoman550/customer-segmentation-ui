import React from 'react'

const RightCardContent = (props) => {
  return (
 <div className='absolute top-0 left-0 h-full w-full  p-4 flex flex-col justify-between'>
        <h2 className='bg-white shadow-2xs rounded-full h-12 w-12 flex items-center justify-center text-2xl font-semibold'> {props.id} </h2>
        <p className='text-xl leading-relaxed font-medium text-white mb-1 mt-55 '> {props.intro} </p>
        <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='text-white  font-medium px-7 py-2 rounded-full'> {props.tag} </button>
            <button className='text-white bg-blue-600 font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>      
    
  )
}

export default RightCardContent
