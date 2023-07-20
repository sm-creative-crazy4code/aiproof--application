import React from 'react'
import { ailogo } from '../assets'

const Navbar = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">

        <nav className="flex justify-between items-center w-full h-14 mb-10 ">
            <div className='w-[40%] h-[500px]'>

            <img src={ailogo} alt='logo'  className='w-full h-full object-contain'/>
            </div>
            <button type="button" 
             onClick={()=>window.open(`https://github.com/sm-creative-crazy4code/aiproof--application` )}
            className="@apply rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black">
             GitHub
            </button>
        </nav>


<h1 className=" mt-5 text-5xl font-extrabold  text-black sm:text-6xl text-center">
Illuminating the Boundaries of Authenticity in   </h1>
 <h1 className='text-center sm:mt-1'>
     <span className="font-black  bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent text-6xl sm:text-7xl text-center ">AI-Generated Content</span></h1>
  <h2 className='text-2xl leading-[1.15] text-black mt-2 sm:mt-0 text-center p-5 sm:p-10'>
  Trust in authenticity. AIproof empowers users to discern real from synthetic content, preserving truth in the AI-driven world.Detecting AI-generated deception, we provide the knowledge to make informed decisions in the digital landscape</h2>

    </header>
  )
}

export default Navbar
