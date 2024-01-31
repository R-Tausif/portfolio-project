import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have x many years of working blah blah. Currently, I love working on web applications using technologies like
                    React, Tailwind, Next JS, etc.
                </p>
                <div className='text-white'>
                    <button>
                        Portfolio
                        <span>
                            <MdOutlineKeyboardArrowRight/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home