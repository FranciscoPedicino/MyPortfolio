import React from 'react'

export default function NavBar() {
  return (
    <div className="h-40 flex justify-center items-center ">
      <div className='w-[40%] flex bg-black justify-around '>
      <button className='w-20 bg-green-600 h-10 border-r-transparent'>Home</button>
      <button className='w-20 bg-green-600 h-10 border-r-transparent'>Sobre Mi </button>
      <button className='w-20 bg-green-600 h-10 border-r-transparent'>Skills</button>
      <button className='w-20 bg-green-600 h-10 border-r-transparent'>Portfolio</button>
      <button className='w-20 bg-green-600 h-10 border-r-transparent'>Contacto</button>
      </div>
    </div>
  )
}
