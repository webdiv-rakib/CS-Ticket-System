import React from 'react';
import './Hero.css'
const Hero = () => {
    return (
        <div className='inter md:flex md:items-center md:justify-between px-30 mt-20 gap-5 text-white'>
            <div className='text-3xl md:w-1/2 text-center md:h-60 flex flex-col justify-center rounded-xl bg-in-progress-1'>
                <h1>In-Progress</h1>
                <h1 className='text-7xl'>0</h1>
            </div>
            <div className='text-3xl md:w-1/2 md:h-60 text-center flex flex-col justify-center rounded-xl bg-resolve'>
                <h1>Resolved</h1>
                <h1 className='text-7xl'>0</h1>
            </div>
        </div>
    );
};

export default Hero;