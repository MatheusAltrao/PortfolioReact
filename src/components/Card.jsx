import React from 'react'
import { ArrowArcRight, ArrowRight, FileJs } from 'phosphor-react'

const Card = ({ name, link, description }) => {
  return (
    <div className='p-4 border border-sky-300 rounded-md w-full max-w-[360px] h-[250px]' data-aos="fade-up">

      <div className='w-full'>
        <FileJs className='text-[28px]' />
        <h2 className='name-card text-left mt-4'>{name}</h2>
        <p className='subtitle' >{description}</p>
        <p className='techs' ></p>
      </div>


      <div className=' flex items-center justify-start mt-4 w-full  '>
        <a href={link} target='_blank' className=' text-sky-300 ' >Link</a>
        <ArrowRight className='text-sky-300' />
      </div>

    </div>
  )
}

export default Card
