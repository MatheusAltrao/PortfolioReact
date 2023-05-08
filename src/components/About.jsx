import React from 'react'
import perfil from '../assets/perfil.jpeg'

const About = () => {
  return (

    <div id='about' className='max-w-[1200px] mx-auto px-4 py-20'>

      <header className=' w-full  md:flex md:flex-col md:items-center' data-aos="fade-down">
        <div >
          <h2 className='title'>Sobre</h2>
          <div className="line"></div>
        </div>
      </header>


      <div className='md:flex-row md:flex flex-col justify-between mt-20 gap-4'  >

        <img className='shadoww w-full h-[400px] max-w-[400px] rounded-lg' src={perfil} alt="matheusaltrao" data-aos="fade-right" />

        <div className=' w-full text-left md:mt-0 mt-7 md:max-w-[600px]' data-aos="fade-left" >

          <p className=' mb-4 text-[#3c3c3c] md:text-[22px] text-[16px]' >Sou um programador Front-end apaixonado e motivado, com experiência em várias ferramentas e tecnologias populares.
          </p>

          <p className=' mb-4 text-[#3c3c3c] md:text-[22px] text-[16px]' >Além disso, também tenho habilidades em <span className='text-gradient'> UX/UI, Ui Motion design </span> e estou sempre procurando maneiras de melhorar a experiência do usuário.
          </p>



          <p className=' mb-4 text-[#3c3c3c] md:text-[22px] text-[16px]' >Busco novas tecnologias, ferramentas e metodologias para <span className='text-gradient' >aprimorar</span>  meu trabalho e expandir minha capacidade como desenvolvedor Front-end.</p>

          <a href="#contact" >
            <button className='btn-1' >Contato</button>
          </a>
        </div>
      </div>


    </div>
  )
}

export default About
