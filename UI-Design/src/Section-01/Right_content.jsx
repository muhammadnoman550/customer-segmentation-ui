import React from 'react'
import {ArrowUpRight} from "lucide-react";
import RightCard from './RightCard';

const Right_content = (props) => {
  return (
     <div id='right' className='flex overflow-x-auto rounded-4xl flex-nowrap gap-10 h-full w-full p-4 '>
     {props.user.map(function(elem,idx){

      return <  RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} intro={elem.intro} />
     }

    )}

    </div>
  )
}

export default Right_content
