import React from 'react'
import { ArrowRight } from 'phosphor-react'



const Card = ({ data }) => {
  const { image, name, description, link, } = data
  return (
    <div className="max-w-[378px] h-[430px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <img className="rounded-t-lg h-[250px] w-full" src={image} alt={name} />

      <div className="p-5">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}.</p>
        <a target='_blank' href={link} className=" group inline-flex items-center px-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ver mais
          <ArrowRight className='group-hover:translate-x-1 transition-transform m-2' size={22} color='#fff' />
        </a>
      </div>
    </div>
  )
}

export default Card
