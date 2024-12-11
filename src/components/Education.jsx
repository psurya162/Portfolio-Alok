import React from 'react';
import Exp from './experience.json';

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='text-center text-4xl my-20'>Education</h1>
      <div className='flex justify-center'>
        {Array.isArray(Exp.education) && Exp.education.length > 0 ? (
          <div className='w-full max-w-4xl'>
            {Exp.education.map((edu, index) => (
              <div className='mb-8 flex flex-wrap lg:justify-start' key={index}>
                <div className='w-full lg:w-1/4'>
                  <p className='mb-2 text-sm text-neutral-300'>{edu.year}</p>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                  <h6 className='mb-2 font-semibold text-xl'>{edu.degree}</h6>
                  <p className='mb-1 text-neutral-400'>{edu.program}</p>
                  <p className='mb-2 text-neutral-500'>{edu.institute}</p>
                  {edu.percentage && (
                    <p className='text-neutral-400'>Percentage: {edu.percentage}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-center text-neutral-400'>No education data available.</p>
        )}
      </div>
    </div>
  );
};

export default Education;
