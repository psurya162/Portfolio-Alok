import React from 'react'

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>
                Me
            </h1>
            <div className='flex flex-wrap '>
                <div className='w-full lg:w-1/2 lg:p-8 '  >
                    
                    <div className='w-full lg:w-1/2'>

                        <div className='flex justify-center lg:justify-start'>
                            <p className='my-2 max-w-xl py-6'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus porro repellendus delectus odit fugiat, molestias distinctio ducimus natus odio accusamus reprehenderit quis deleniti eaque vero. Labore dicta aspernatur, at quasi sint eaque laudantium cumque explicabo ipsa dolorum error porro earum reiciendis voluptates ratione expedita maiores? Blanditiis expedita a tenetur?
                            </p>
                        </div>

                    </div>

                </div>
                <div className='flex items-center justify-center'>
                        <img src="" alt="About" className='rounded-2xl' />
                    </div>
            </div>
        </div>
    )
}

export default About