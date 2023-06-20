import './styles/global.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Techs from './components/Techs'
import Projects from './components/Projects'
import Loading from './components/Loading'
import { ArrowUp } from 'phosphor-react'
import { useEffect, useState } from 'react'
import Contact from './components/Contact'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()


function App() {

  const [backToTopButton, setBackToTopButton] = useState(false)
  const [isLoading, setLoading] = useState(true)

  function backToTop() {

    window.scroll({
      top: 0
    })

  }


  useEffect(() => {

    window.addEventListener('scroll', () => {

      if (scrollY > 500) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])





  return (
    <div className='overflow-x-hidden max-w-screen'>

      <Loading setLoading={setLoading} />
      <NavBar />
      <Home />
      <About />
      <Techs />
      <Projects />
      <Contact />


      <button onClick={backToTop} className={`${backToTopButton ? 'show' : ''} btn-4 `} ><ArrowUp className='icon' /></button>


    </div>
  )
}

export default App
