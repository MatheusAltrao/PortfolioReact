import { ClosedCaptioning, List, X } from 'phosphor-react'
import React, { useState } from 'react'
import logo from '../assets/fiveiconsemfundo.png'

const NavBar = () => {

  const [menu, setMenu] = useState(false)

  function showMenu() {
    setMenu(!menu)
  }

  return (
    <div className='w-full fixed top-2 px-4  left-0 right-0 z-10  max-w-[1200px] mx-auto'>

      <div className='w-full  px-4 py-2 bg-red-300 h-full  flex items-center justify-between rounded-xl glass  ' >

        <div className=' w-10 md:w-15 object-cover'>
          <img src={logo} alt="" />
        </div>

        <List onClick={showMenu} className='flex md:hidden icon text-white cursor-pointer' />

        <ul className={`md:flex items-center  menu ${menu ? 'active' : ''}  `} >
          <div className='absolute top-0 left-0'>

            <X onClick={showMenu} className='icon relative top-4 left-8 text-sky-300 md:hidden' />
          </div>

          <li onClick={showMenu} className='nav text-slate-300' ><a href="#home">Início</a></li>
          <li onClick={showMenu} className='nav text-slate-300' ><a href="#about">Sobre</a></li>
          <li onClick={showMenu} className='nav text-slate-300' ><a href="#projects">Projetos</a></li>
          <li onClick={showMenu} className='nav text-slate-300' ><a href="#contact">Contato</a></li>
        </ul>

      </div>
    </div>
  )
}

export default NavBar
