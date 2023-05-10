import { List, X } from 'phosphor-react'
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


      <div className='w-full  px-4 py-2  h-full  flex items-center justify-between md:rounded-md md:border border-y border-slate-500  glass  ' >


        <div className=' w-12 md:w-15 object-cover'>
          <Img className='animate-top4 ' src={logo} alt="Logo do Matheus" />
        </div>

        <ul className=' hidden md:flex items-center justify-center gap-4' >
          <li onClick={showMenu} className='nav text-slate-300' ><a href="#home">Início</a></li>
          <li onClick={showMenu} className='nav text-slate-300' ><a href="#about">Sobre</a></li>
          <li onClick={showMenu} className='nav text-slate-300' ><a href="#projects">Projetos</a></li>
          <li onClick={showMenu} className='nav text-slate-300' ><a href="#contact">Contato</a></li>
        </ul>

        <div className=' md:hidden flex items-center justify-center' >
          <button onClick={showMenu} >  <List size={28} color='#fff' /> </button>
        </div>


        <ul className={`fixed top-[-10px] ${menu ? 'left-[40%] opacity-100' : 'left-[100%] opacity-0 '}  bg-[#0B2254] h-[102vh] w-screen flex items-start 
        justify-center flex-col text-[32px] gap-4 pl-4 border border-slate-500 transition-all duration-150 z-10`} >

          <li className='absolute top-4 left-4' >
            <button onClick={showMenu} >  <X size={28} color='#fff' /> </button>
          </li>

          <li onClick={showMenu} className='nav-mobile text-slate-300' ><a href="#home">Início</a></li>
          <li onClick={showMenu} className='nav-mobile text-slate-300' ><a href="#about">Sobre</a></li>
          <li onClick={showMenu} className='nav-mobile text-slate-300' ><a href="#projects">Projetos</a></li>
          <li onClick={showMenu} className='nav-mobile text-slate-300' ><a href="#contact">Contato</a></li>

        </ul>



      </div>


    </nav>
  )
}

export default NavBar
