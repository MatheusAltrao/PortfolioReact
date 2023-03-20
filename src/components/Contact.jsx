import { Chat, EnvelopeSimple, Smiley } from 'phosphor-react'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-[#fafafa] px-4 py-20' >

      <div className='max-w-[1200px] mx-auto text-[#000] px-4 ' >
        <header className=' w-full md:flex md:flex-col md:items-center'>
          <div>
            <h2 className='title'>Contato</h2>
            <div className="line"></div>
          </div>
        </header>


        <div className='grid reverse md:grid-cols-3 mt-20 '>

          <div className='col-span-2 max-w-[400px] mt-10 md:mt-0' >
            <h2 className='text-[32px] font-bold' > <span className='text-gradient' > Vamos  construir algo incrível juntos?  </span> </h2>

            <p className='subtitle mt-4' >Sinta-se à vontade para entrar em contato comigo, vou ficar super feliz em conversar e trocar ideias. E se tiver qualquer dúvida, por favor, não hesite em perguntar.</p>

            <div className="divider"></div>


            <h2 className='text-[32px] font-bold' > Minhas redes </h2>

            <div className='flex items-center gap-4 mt-2 icon'>
              <GithubLogo />
              <InstagramLogo />
              <LinkedinLogo />
            </div>

            <div className="divider"></div>

            <p className='subtitle' >©Todos os direitos reservados 2023</p>
          </div>

          <form className='  col-span-2 md:col-span-1'>

            <label className='w-full'>
              <p className=' mb-2 text-[18px]' >Nome</p>

              <div className='relative' >
                <input className='py-2 pl-9 pr-4 w-full text-[16px] border border-[#e8e8e8] rounded-md' type="text" placeholder='Insira o seu nome' />

                <Smiley className=' text-[#a4a4a4] icon absolute top-2 left-2' />
              </div>
            </label>

            <label>
              <p className='mt-6 mb-2 text-[18px]' >E-mail</p>
              <div className='relative' >
                <input className='py-2 pl-9 pr-4 w-full text-[16px] border border-[#e8e8e8] rounded-md' type="email" placeholder='Insira o seu e-mail' />

                <EnvelopeSimple className=' text-[#a4a4a4] icon absolute top-2 left-2' />
              </div>
            </label>

            <label>
              <p className='mt-6 mb-2 text-[18px]' >Mensagem</p>
              <div className='relative'>
                <textarea className=' py-2 pl-9 pr-4 w-full text-[16px] border border-[#e8e8e8] rounded-md resize-none h-[100px]' name="message" placeholder='Sua mensagem aqui!' />

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
