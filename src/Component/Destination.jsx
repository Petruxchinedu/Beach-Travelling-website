import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Keywest from '../assets/keywest.jpg'
const Destination = () => {
  return (
    <div name='destination' className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-inclusive Resorts</h1>
      <p>On the Caribbean Best Beach</p>
      <div className='grid gri-ro md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={BoraBora} alt="/" />
        <img className="w-full h-full object-cover" src={BoraBora2} alt="/" />
        <img className="w-full h-full object-cover" src={Maldives} alt="/" />
        <img className="w-full h-full object-cover" src={Maldives2} alt="/" />
        <img className="w-full h-full object-cover" src={Keywest} alt="/" />
      </div>
    </div>
  )
}

export default Destination
