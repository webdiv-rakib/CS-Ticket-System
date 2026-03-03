import React from 'react';
import './Hero.css'
const Hero = ({ inProgressCount, resolveCount }) => {
    return (
        <div className='inter md:flex md:items-center md:justify-between md:px-30 md:mt-15 gap-5 text-white mt-5 px-6 flex'>
            <div className='md:text-3xl md:w-1/2 text-center md:h-60 flex flex-col justify-center rounded-xl bg-in-progress-1 p-5 w-1/2'>
                <h1>In-Progress</h1>
                <h1 className='text-7xl'>{inProgressCount || 0}</h1>
            </div>
            <div className='md:text-3xl md:w-1/2 md:h-60 text-center flex flex-col justify-center rounded-xl bg-resolve p-5 w-1/2'>
                <h1>Resolved</h1>
                <h1 className='text-7xl'>{resolveCount || 0}</h1>
            </div>
        </div>
    );
};

export default Hero;