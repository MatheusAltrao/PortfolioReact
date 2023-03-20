import { Chat, EnvelopeSimple, Smiley } from 'phosphor-react'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleForm(e) {

    e.preventDefault()



    if (name === '' || email === '' || message === '') {
      toast.warning('Preencha os campos corretamente')
      return
    }


    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send('service_vl6heve', 'template_2d52467', templateParams, 'vkJONRtaliQbsr39T')
      .then((response) => {
        console.log('email enviado', response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
        toast.success('E-mail enviado')
      }, (err) => {
        console.log('erro', err)
      })
  }


  return (
    <div id='contact' className='bg-[#fafafa] px-4 py-20' >

      <div className='max-w-[1200px] mx-auto text-[#000] px-4 ' >
        <header className=' w-full md:flex md:flex-col md:items-center' data-aos="fade-down">
          <div>
            <h2 className='title'>Contato</h2>
            <div className="line"></div>
          </div>
        </header>


        <div className='grid reverse md:grid-cols-3 mt-20 '>

          <div className='col-span-2 max-w-[400px] mt-10 md:mt-0' data-aos="fade-right" >
            <h2 className='text-[32px] font-bold' > <span className='text-gradient' > Vamos  construir algo incrível juntos?  </span> </h2>

            <p className='subtitle mt-4 text-[#000] opacity-70' >Sinta-se à vontade para entrar em contato comigo, vou ficar super feliz em conversar e trocar ideias. E se tiver qualquer dúvida, por favor, não hesite em perguntar.</p>

            <div className="divider"></div>


            <h2 className='text-[32px] font-bold' > Minhas redes </h2>

            <div className='flex items-center gap-4 mt-2 icon'>
              <a href="https://github.com/MatheusAltrao" target='_blank'> <GithubLogo /></a>
              <a href="https://www.instagram.com/matheus_altrao/" target='_blank'> <InstagramLogo /></a>
              <a href="https://www.linkedin.com/in/matheus-altrao/" target='_blank'><LinkedinLogo /></a>
            </div>

            <div className="divider"></div>

            <p className='subtitle text-[#000] opacity-70' >©Todos os direitos reservados 2023</p>
          </div>

          <form onSubmit={handleForm} className='  col-span-2 md:col-span-1' data-aos="fade-left">

            <label className='w-full'>
              <p className=' mb-2 text-[18px]' >Nome</p>

              <div className='relative' >
                <input value={name} onChange={(e) => setName(e.target.value)} className='py-2 pl-9 pr-4 w-full text-[16px] border border-[#e8e8e8] rounded-md' type="text" placeholder='Insira o seu nome' />

                <Smiley className=' text-[#a4a4a4] icon absolute top-2 left-2' />
              </div>
            </label>

            <label>
              <p className='mt-6 mb-2 text-[18px]' >E-mail</p>
              <div className='relative' >
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='py-2 pl-9 pr-4 w-full text-[16px] border border-[#e8e8e8] rounded-md' type="email" placeholder='Insira o seu e-mail' />

                <EnvelopeSimple className=' text-[#a4a4a4] icon absolute top-2 left-2' />
              </div>
            </label>

            <label>
              <p className='mt-6 mb-2 text-[18px]' >Mensagem</p>
              <div className='relative'>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className=' py-2 pl-9 pr-4 w-full text-[16px] border border-[#e8e8e8] rounded-md resize-none h-[100px]' name="message" placeholder='Sua mensagem aqui!' />

                <Chat className='text-[#a4a4a4] icon absolute top-2 left-2' />
              </div>
            </label>

            <button className='btn-3 w-full mt-6' >Enviar E-mail</button>



          </form>

        </div>

      </div>
    </div >
  )
}

export default Contact
