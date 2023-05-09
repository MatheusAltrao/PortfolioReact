import React from 'react'
import Card from './Card'
import CasaVerde from '../assets/coverProjects/casaverde.png'
import Twitter from '../assets/coverProjects/twitter.png'
import Dashboard from '../assets/coverProjects/dashboard.png'
import SalaoDeBeleza from '../assets/coverProjects/salaodebeleza.png'
import GodOfWar from '../assets/coverProjects/godofwar.png'
import HooBank from '../assets/coverProjects/hoobank.png'
import Spotify from '../assets/coverProjects/spotify.png'
import LandingPage from '../assets/coverProjects/landingpage.png'
import AssistenciaMedica from '../assets/coverProjects/assistenciamedica.png'

const Projects = () => {

  const repos = [
    {
      image: Spotify,
      name: 'Spotify',
      description: 'Clone do aplicativo de música Spotify, mas apenas em desktops ',
      link: 'https://ui-spotify-ten.vercel.app/'
    },
    {
      image: CasaVerde,
      name: 'CasaVerde',
      description: 'Um ecommerce de uma floricultura com um design moderno',
      link: 'https://casa-verde-beige.vercel.app/'
    },
    {
      image: Twitter,
      name: 'Twitter',
      description: 'Clonando a interface do twitter e algunas funcionalidades',
      link: 'https://ui-twitter-two.vercel.app/'
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
      image: LandingPage,
      name: 'LandingPage',
      description: 'Landinpage com tailwindCSS',
      link: 'https://voice-x-lading-page.vercel.app/'
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

        <div className=" w-full  flex items-center justify-center gap-4 flex-wrap mt-20">

          {repos.map((repo, index) => (
            <Card key={index} data={repo} />
          ))}

        </div>
      </div>

    </div>
  )
}

export default Projects
