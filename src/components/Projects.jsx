import React from 'react'
import InteractiveTable from '../assets/coverProjects/InteractiveTable.png'
import AssistenciaMedica from '../assets/coverProjects/assistenciamedica.png'
import Conversation from '../assets/coverProjects/conversation.png'
import Dashboard from '../assets/coverProjects/dashboard.png'
import HooBank from '../assets/coverProjects/hoobank.png'
import MatheuStore from '../assets/coverProjects/matheuStore.png'
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
      image: Dashboard,
      name: 'Dashboard',
      description: 'Uma dashboard para visualizações de compras',
      link: 'https://dashboard-3rsk.vercel.app/'
    },
    {
      image: InteractiveTable,
      name: 'InteractiveTable',
      description: 'Tabela interativa, onde vc pode mudar os status do pedido, filtragem e deletar',
      link: 'https://interactive-table.vercel.app/'
    },
    {
      image: Conversation,
      name: 'Conversation',
      description: 'Simulando um app de conversa, somente desktops',
      link: 'https://conversation-dun.vercel.app/'
    },
    {
      image: MatheuStore,
      name: 'MatheuStore',
      description: 'Desenvolvendo um carrinho de compras',
      link: 'https://cart-products-zeta.vercel.app/'
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
      image: "https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs-challenge-01-todo-list/main/src/assets/previews/preview.png",
      name: 'Todo list',
      description: 'Lista de tarefas, realizado no curso da Rocketseat',
      link: 'https://todo-rocketseat-two.vercel.app/'
    },

 
  
    {
      image: "https://i.pinimg.com/originals/6a/12/f5/6a12f5de799ac26005050eecaa4371bf.png",
      name: 'Ignite Feed',
      description: 'Clone do twitter feito com a RocketSeat',
      link: 'https://rede-social-chi.vercel.app/'
    },

    {
      image: "https://camo.githubusercontent.com/469732accabda2a6f081b981884c2b24db911b46afb67ee8c5faa55a5a756cdf/68747470733a2f2f692e70696e696d672e636f6d2f353634782f39352f30622f39642f39353062396432626266323431393661656437653736393136653334353463652e6a7067",
      name: 'Relax Chill Code',
      description: 'Cards de músicas para escutar e relaxar',
      link: 'https://player-music-two.vercel.app/'
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
