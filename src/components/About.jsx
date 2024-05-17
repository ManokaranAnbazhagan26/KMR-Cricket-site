import React from 'react'
import Aboutimgae from '../assets/Aboutimage1.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 ' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>

            <h2 className='text-4xl font-bold mb-4 primary-color'>About KMR East Boys</h2>
            <p className='text-base lg:text-lg'>The team plays its home matches at the M.K Nagar Stadium in (Kalamarudur ,Villupurm) and is owned by Kalamarudur Super Kings Cricket Limited.The Super Kings started the season with eight wins in their first ten matches before suffering from a dip in form towards the end of the regular season, but recovered to finish third in the points table to qualify for the playoffs.[53][54] In the first match of the playoffs, they beat Mumbai Indians by seven wickets before losing to Kings XI Punjab in the next match.[55] In the 2014 Champions League, the Super Kings won two matches to finsh second in the group table to qualify for the semifinal.[56] They beat Kings XI Punjab in the semi-finals by 65 runs.[57] At the final in Bangalore

            </p>
        </div>
        </div>
          
          <img className='mx-auto rounded-3xl py-8 md:py-0' src={Aboutimgae} width={300} height={300} />

        </div>
    </div>
  )
}

export default About