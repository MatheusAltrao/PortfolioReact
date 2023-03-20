import './styles/global.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Techs from './components/Techs'
import Projects from './components/Projects'
import { ArrowUp } from 'phosphor-react'
import { useEffect, useState } from 'react'
import Contact from './components/Contact'


function App() {

  const [backToTopButton, setBackToTopButton] = useState(false)

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
    <div className=''>
      <NavBar />
      <Home />
      <About />
      <Techs />
      <Projects />
      <Contact />

      <button onClick={backToTop} className={`${backToTopButton ? 'show' : ''}   btn-2 h-10 w-10 flex items-center justify-center translate-x-0`} ><ArrowUp className='icon' /></button>


    </div>
  )
}

export default App
