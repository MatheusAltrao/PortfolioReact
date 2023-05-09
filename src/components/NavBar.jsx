import { ClosedCaptioning, List, X } from 'phosphor-react'
import React, { useState } from 'react'
import logo from '../assets/logoCyan.svg'
import { Img } from 'react-image';

const NavBar = () => {

  const [menu, setMenu] = useState(false)
  function showMenu() {
    setMenu(!menu)
  }

  return (
    <nav className='w-full fixed top-2 md:px-4 px-0  left-0 right-0 z-10  max-w-[1200px] mx-auto'>


      <div className='w-full  px-4 py-4  h-full  flex items-center justify-between md:rounded-xl  glass  ' >


        <div className=' w-12 md:w-15 object-cover'>
          <Img className='animate-top4 ' src={logo} alt="Logo do Matheus" />
        </div>

        <List onClick={showMenu} className='flex  md:hidden text-[2rem] text-white cursor-pointer' />

        <ul className={`md:flex items-center  menu ${menu ? 'active' : ''} animate-top6   `} >
          <div className='absolute top-0 left-0'>
            <X onClick={showMenu} className='text-[2rem] cursor-pointer relative top-4 left-8 text-sky-300 md:hidden' />
          </div>

          <li onClick={showMenu} className='nav text-slate-300' ><a href="#home">Início</a></li>
          <li onClick={showMenu} className='nav text-slate-300' ><a href="#about">Sobre</a></li>
          <li onClick={showMenu} className='nav text-slate-300' ><a href="#projects">Projetos</a></li>
          <li onClick={showMenu} className='nav text-slate-300' ><a href="#contact">Contato</a></li>
        </ul>



      </div>


    </nav>
  )
}

export default NavBar
