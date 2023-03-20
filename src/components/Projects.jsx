import { data } from 'autoprefixer'
import React, { useState, useEffect } from 'react'
import Card from './Card'



const Projects = () => {

  const [repos, setRepos] = useState([])
  const api = 'https://api.github.com/users/MatheusAltrao/repos'



  useEffect(() => {

    fetch(api)
      .then(response => response.json())
      .then(data => setRepos(data))



  }, [])


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

          {repos.map((repository) => {

            return (

              <Card key={repository.id} name={repository.name} description={repository.description} link={repository.html_url} topics={repository.topics} />
            )

          })}




        </div>
      </div>

    </div>
  )
}

export default Projects
