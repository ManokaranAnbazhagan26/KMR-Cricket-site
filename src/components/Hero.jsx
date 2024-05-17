import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Batimage from '../assets/Batimage.jpg'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[700px] mx-auto py-8 bg-black'>
       
       <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
       
          <img src={Batimage} alt="Bat image" />

        </div>

       <div className='col-span-2 px-5 my-auto' >

        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>
            We are</span><br />
            <TypeAnimation
            sequence={[
              "KMR East Boys",
              1000,
              "Welcome",
              1000,
              "The Best Plyers..!",
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />

        </h1>

        <p className='text-white sm:text-lg my-6 lg:text-xl'>
        Prepare your kids for cricket selection trials next year with these cricket academies in Villupurm
        </p>
        <div className='my-8'>
          <a href="#EnquieyForm" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-600 text-white' >
            Join Now

          </a>
          <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-600 text-white hover:border-none' >
            Contact 

          </a>
        </div>
        
       </div>
    </div>
  )
}

export default Hero