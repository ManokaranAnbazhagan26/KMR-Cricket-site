import React from 'react';
import Battingimage from '../assets/Battingimage.jpg';
import Ballimage from '../assets/Ball.webp';
import AllRounderimage from '../assets/alrounder1.jpeg';

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4'>
      <h2 className='col-span-1 sm:col-span-2 md:col-span-1 text-gray-700 text-2xl md:text-4xl font-bold text-center md:text-left'>
        U_kNOW<br /> ABOUT <br />CRICKET
      </h2>

      <div className='flex flex-col items-center'>
        <img src={Battingimage} alt="Batting" className='rounded-3xl w-full h-auto'/>
        <p className='mt-2 text-center'>Batting</p>
      </div>
      
      <div className='flex flex-col items-center'>
        <img src={Ballimage} alt="Bowling" className='rounded-3xl w-full h-auto'/>
        <p className='mt-2 text-center'>Bowling</p>
      </div>

      <div className='flex flex-col items-center'>
        <img src={AllRounderimage} alt="AllRound" className='rounded-3xl w-full h-auto'/>
        <p className='mt-2 text-center'>AllRounder</p>
      </div>
    </div>
  );
};

export default Skills;
