import React from 'react';
import Exp from './experience.json';

const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='text-center text-4xl my-20'>Projects</h1>
      <div>
        {Array.isArray(Exp.projects) && Exp.projects.length > 0 ? (
          Exp.projects.map((exp, index) => (
            <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>
              <div className='w-full lg:w-1/4'>
                <img 
                  src='https://via.placeholder.com/150' 
                  alt={exp.name} 
                  className='mb-6 rounded' 
                />
              </div>

              <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold text-xl'>{exp.name}</h6>
                <p className='mb-4 text-neutral-600'>{exp.description}</p>
                
                <div className='mb-4'>
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className='mr-2 mb-2 inline-block rounded bg-neutral-200 px-2 py-1 text-sm text-purple-800'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={exp.url} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='text-purple-500 hover:underline'
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-neutral-500'>No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default Project;
