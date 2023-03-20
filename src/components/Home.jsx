import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'
import Pyramid from './Pyramid/Pyramid'




const Home = () => {


  return (

    <div id='home' className=' bg-gradient min-h-screen flex items-center px-4 w-full  '>

      <div className=' flex flex-col  justify-center  px-4   max-w-[1200px] mx-auto h-full w-full md:justify-between md:flex-row md:items-center'>

        <div className='flex pt-20  '>
          <div className='block h-[280px]  border-r border-sky-300  mr-4' />

          <div className='flex-col text-white '>
            <h2 className='md:text-[27px] text-[22px]' >Ola mundo, meu nome é</h2>
            <h1 className='md:text-[72px] text-[40px] font-bold' >Matheus Altrão</h1>
            <p className='md:text-[40px] text-[32px] ' >Dev <span className='text-gradient'>Front-End</span></p>

            <div className='flex items-center gap-4 mt-6 icon'>
              <GithubLogo />
              <InstagramLogo />
              <LinkedinLogo />
            </div>
          </div>

        </div>

        <div className='flex justify-center pb-10 '>
          <Pyramid />
        </div>


      </div>

    </div>

  )
}

export default Home
