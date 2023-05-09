import React from 'react'
import Card from './Card'



const Projects = () => {

  const repos = [
    {
      image: 'https://i.pinimg.com/originals/01/e1/1d/01e11d62a8981b4d9cc2a8d2ae040d02.png',
      name: 'Spotify',
      description: 'Clone do aplicativo de música Spotify, mas apenas em desktops ',
      link: 'https://ui-spotify-ten.vercel.app/'
    },
    {
      image: 'https://camo.githubusercontent.com/072ed5d7ef494f332c0a8ec2218264f35f46f00b9f442cf619d671c618a93771/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f30342f63382f61332f30346338613339333833393337386634366561383033373664366464386139372e706e67',
      name: 'CasaVerde',
      description: 'Um ecommerce de uma floricultura com um design moderno',
      link: 'https://casa-verde-beige.vercel.app/'
    },
    {
      image: 'https://camo.githubusercontent.com/7218d33b05b269d73fb38a242302a5343a6032b19d9a4fe404ccec50a5e73f00/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f36332f63382f62352f36336338623566656562303961363630366238633563633165303635616332372e706e67',
      name: 'Twitter',
      description: 'Clonando a interface do twitter e algunas funcionalidades',
      link: 'https://ui-twitter-two.vercel.app/'
    },
    {
      image: 'https://camo.githubusercontent.com/35dfd856e2f58791c25ba9c853949a1547b93bb3db63dda365a1226c5d17ed18/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f66322f33322f35352f66323332353532643763393132316262386238353964643766363036613766612e706e67',
      name: 'Dashboard',
      description: 'Uma dashboard para visualizações de compras',
      link: 'https://dashboard-3rsk.vercel.app/'
    },
    {
      image: 'https://i.pinimg.com/originals/f8/ed/9c/f8ed9c671f09bbb1493736b2468e2e18.png',
      name: 'HooBank',
      description: 'LandingPage bem futurista, de um banco muito tecnológico ',
      link: 'https://hoo-bank-theta-steel.vercel.app/'
    },
    {
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Salão de beleza',
      description: 'Saúde natural para os seus cabelos e dicas de tratamentos',
      link: 'https://matheusaltrao.github.io/Beautysalon./'
    },

    {
      image: 'https://i.pinimg.com/originals/73/16/92/73169220c5142989fe52674650e95410.png',
      name: 'Assistência médica',
      description: 'LandingPage consultórios médicos',
      link: 'https://matheusaltrao.github.io/DoctorCare/'
    },


    {
      image: 'https://i.pinimg.com/originals/78/a1/31/78a1310cb35f082832217bbf277dc534.png',
      name: 'LandingPage',
      description: 'Landinpage com tailwindCSS',
      link: 'https://voice-x-lading-page.vercel.app/'
    },

    {
      image: 'https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/61716faa61eca53a843588af/sharing_images/lcwz6ohd1c3iurp3jtwo.jpg',
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
