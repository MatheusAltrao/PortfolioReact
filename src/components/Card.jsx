import React from 'react'
import { ArrowRight } from 'phosphor-react'
import { Img } from 'react-image';



const Card = ({ data }) => {
  const { image, name, description, link, } = data
  return (
    <div className="w-[378px] h-[430px]  border-gray-700 border rounded-lg shadow-lg shadow-black/40 bg-gray-900 " data-aos="fade-up" >


      <Img className="rounded-t-lg h-[250px] w-full" src={image} alt={name}
      />

      <div className="p-5">

        <h2 className="mb-2 text-2xl font-bold title-card text-white">{name}</h2>

        <p className="mb-3 font-normal text-gray-300">{description}.</p>
        <a target='_blank' href={link} className=" group inline-flex items-center px-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ver mais
          <ArrowRight className='group-hover:translate-x-1 transition-transform m-2' size={22} color='#fff' />
        </a>
      </div>
    </div>
  )
}

export default Card
