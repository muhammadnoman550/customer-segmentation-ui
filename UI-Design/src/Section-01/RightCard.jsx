import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className=' shrink-0 h-full w-80 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src= {props.img} alt="" />\
      <RightCardContent tag={props.tag}  id={props.id + 1} color={props.color} intro={props.intro}  />
    </div>
  )
}

export default RightCard
