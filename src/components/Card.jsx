import React from 'react'
import imgTest from '../assets/teste.webp'
import { ArrowArcRight, ArrowRight, FileJs } from 'phosphor-react'

const Card = ({ name, link, description, topics }) => {
  return (
    <div className='p-4 border border-sky-300 rounded-md w-full max-w-[300px] h-[250px]'>

      <FileJs className='text-[28px]' />
      <h2 className='name-card text-left mt-4'>{name}</h2>
      <p className='subtitle' >{description}</p>
      <p className='techs' ></p>

      <div className=' flex items-center justify-start mt-2 '>
        <a href={link} target='_blank' >Link</a>
        <ArrowRight />
      </div>

    </div>
  )
}

export default Card
