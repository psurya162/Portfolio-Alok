import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaUbuntu } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { SiMongodb, SiMysql, SiPostman, SiNginx } from "react-icons/si";

const icons = [
  { component: FaReact, color: 'text-cyan-500' },
  { component: FaNodeJs, color: 'text-green-600' },
  { component: RiTailwindCssFill, color: 'text-blue-500' },
  { component: FaHtml5, color: 'text-orange-500' },
  { component: FaCss3Alt, color: 'text-blue-600' },
  { component: DiJavascript, color: 'text-yellow-500' },
  { component: SiMongodb, color: 'text-green-500' },
  { component: SiMysql, color: 'text-blue-800' },
  { component: FaBootstrap, color: 'text-purple-600' },
  { component: SiPostman, color: 'text-orange-600' },
  { component: FaGithub, color: 'text-gray-800' },
  { component: SiNginx, color: 'text-green-600' },
  { component: FaUbuntu, color: 'text-orange-700' },
];

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        {icons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <div key={index} className='rounded-2xl p-4'>
              <IconComponent className={`text-7xl ${icon.color}`} />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Technology
