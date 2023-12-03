import React from 'react'

const SelectsCard = ({bg,text}) => {
  return (
    <div className='relative'>
        <img className='w-full h-full object-cover' src={bg} alt="/" />
        <div className='bg-gray-900/30 absolute left-0 top-0 text-white font-bold w-full h-full'><p className='left-4 bottom-4 absolute text-2xl'>{text}</p></div>
    </div>
  )
}

export default SelectsCard
