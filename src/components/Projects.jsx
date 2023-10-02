import React from 'react'
import AssistenciaMedica from '../assets/coverProjects/assistenciamedica.png'
import Dashboard from '../assets/coverProjects/dashboard.png'
import GodOfWar from '../assets/coverProjects/godofwar.png'
import HooBank from '../assets/coverProjects/hoobank.png'
import SalaoDeBeleza from '../assets/coverProjects/salaodebeleza.png'
import Card from './Card'

const Projects = () => {

  const repos = [

    {
      image: ' https://camo.githubusercontent.com/73d71abfc85e497fcd49cd41f79a28d426bcde1d8b4b52dc245ab7f52fbd006a/68747470733a2f2f736d2e69676e2e636f6d2f69676e5f62722f67616d652f6d2f6d617276656c732d73702f6d617276656c732d7370696465722d6d616e2d6d696c65732d6d6f72616c65735f647537312e6a7067',
      name: 'SpiderMan-Miles',
      description: 'HomePage Miles Morales',
      link: 'https://matheusaltrao.github.io/SpiderMan-Miles/'
    },
    {
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png',
      name: 'SpiderMan-Peter',
      description: 'HomePage SpiderMan Peter Parker',
      link: 'https://matheusaltrao.github.io/Spider-man/'
    },
    {
      image: Dashboard,
      name: 'Dashboard',
      description: 'Uma dashboard para visualizações de compras',
      link: 'https://dashboard-3rsk.vercel.app/'
    },
    {
      image: HooBank,
      name: 'HooBank',
      description: 'LandingPage bem futurista, de um banco muito tecnológico ',
      link: 'https://hoo-bank-theta-steel.vercel.app/'
    },
    {
      image: SalaoDeBeleza,
      name: 'Salão de beleza',
      description: 'Saúde natural para os seus cabelos e dicas de tratamentos',
      link: 'https://matheusaltrao.github.io/Beautysalon./'
    },

    {
      image: AssistenciaMedica,
      name: 'Assistência médica',
      description: 'LandingPage consultórios médicos',
      link: 'https://matheusaltrao.github.io/DoctorCare/'
    },



    {
      image: GodOfWar,
      name: 'God of War Ragnarök',
      description: 'Jogo de ps4 God of War Ragnarök',
      link: 'https://matheusaltrao.github.io/GodOfWar/'
    },

  ]

  return (
    <div id='projects' className='bg-[#191f3f] px-4 py-20' >

      <div className='max-w-[1200px] mx-auto text-white ' >
        <header className=' w-full md:flex md:flex-col md:items-center' data-aos="fade-down">
          <div>
            <h2 className='title'>Projetos</h2>
            <div className="line-2"></div>
          </div>
        </header>

        <div className=" w-full  flex items-center justify-center gap-x-4 gap-y-8 flex-wrap mt-20">

          {repos.map((repo, index) => (
            <Card key={index} data={repo} />
          ))}

        </div>
      </div>

    </div>
  )
}

export default Projects
