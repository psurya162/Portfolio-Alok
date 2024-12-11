import React from 'react'
import { motion } from "motion/react"
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>

            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-6 text-2xl font-thin tracking-tighter lg:mt-16 lg:text-8xl '>Alok Kumar</h1>
                        <motion.span animate={{ x: 100 }} className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent '>
                            <TypeAnimation
                                sequence={[
                                    
                                    'Full Stack Developer',
                                    1000, 
                                    'Front-End Developer',
                                    1000,
                                    'Back-End Developer',
                                    1000,
                                    'Software Deveoper',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </motion.span>
                        <p className='my-2  max-w-xl py-6 font-light tracking-tighter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel culpa repellendus placeat voluptatem iusto ducimus aliquam fugiat numquam corrupti cupiditate ea, ex temporibus nisi consectetur odio nostrum. Debitis ea reprehenderit, a quidem iure ipsam. Quasi voluptatum quas dolore, et dolor numquam odit. Pariatur, amet. Quae facere ab quasi aperiam corrupti!</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8 '>
                    <div className='flex justify-center'>
                        <img src="" alt="Alok Kumar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero