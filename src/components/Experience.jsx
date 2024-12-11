import React from 'react';
import Exp from './experience.json';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='text-center text-2xl my-20'>Experience</h1>
      <div>
        {Array.isArray(Exp.experience) && Exp.experience.length > 0 ? (
          Exp.experience.map((exp, index) => (
            <div className='mb-8 flex flex-wrap lg:justify-start' key={index}>
              <div className='w-full lg:w-1/2'>
                <p className='mb-2 text-sm text-neutral-300'>{exp.start_date} - {exp.end_date}</p>
              </div>
              <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>
                  {exp.role} - {' '}
                  <span className='text-sm text-purple-400'>{exp.company}</span>
                </h6>
                <ul className='mb-4 text-neutral-400 list-disc list-inside'>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-neutral-400'>No experience data available.</p>
        )}
      </div>
    </div>
  );
};

export default Experience;
