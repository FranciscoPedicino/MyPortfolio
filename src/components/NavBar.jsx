import React from 'react'
import {Link as Anchor } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="h-32 flex justify-center items-center bg-blue-700 ">
      <div className='w-[40%] h-16 flex bg-black justify-around items-center'>
       <Anchor to="/"><button className='w-24 bg-green-600 h-10 rounded-full '>Home</button></Anchor>
       <Anchor to='/AboutMe'> <button className='w-24 bg-green-600 h-10 rounded-full '>About Me</button></Anchor> 
      <button className='w-24 bg-green-600 h-10 rounded-full '>Skills</button>
      <button className='w-24 bg-green-600 h-10 rounded-full '>Portfolio</button>
      <button className='w-24 bg-green-600 h-10 rounded-full '>Contact</button>
      </div>
    </div>
  )
}
