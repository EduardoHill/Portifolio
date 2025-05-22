import { BookText, MailIcon, Phone, SquareTerminal, X } from 'lucide-react'
import { Code } from '../../components/Code'
import { Footer } from '../../components/footer'
import { Arrow } from '../../images/ArrowD'
import { ArrowR } from '../../images/ArrowR'
import { FolderBlue } from '../../images/FolderBlue'
import { FolderGreen } from '../../images/FolderGreen'
import { Mark } from '../../images/Markdown'
import { Link } from 'react-router-dom'
import { ArrowD2 } from '../../images/ArrowD2'
import { FolderRed } from '../../images/FolderRed'
import { Header } from '../../components/header'

export function Interests() {
  return (
    <div className=' h-screen w-full bg-[#020618] p-8'>
      <div className='flex flex-col justify-between h-full'>
        <Header />
        <div className='bg-[#0F172B] h-full w-full border-l border-r border-[#62748E]  flex'>
          <div className='flex flex-col w-[56px] items-center py-6 gap-6 border-r border-r-[#62748E] '>
            <a href=''>
              <SquareTerminal color='#90A1B9' />
            </a>
            <a href=''>
              <BookText color='#90A1B9' />
            </a>
          </div>
          <div className=' w-[242px] flex flex-col items-center border-r border-r-[#62748E] '>
            <div className='flex flex-col w-full '>
              <span className='flex items-center text-white  border-b border-b-[#62748E] w-full justify-center py-3 '>
                <Arrow /> personal-info
              </span>
              <div className='flex flex-col px-14 py-3 gap-3'>
                <Link
                  to={'/sobre/bio'}
                  className='flex gap-1 items-center text-[#90A1B9]  '
                >
                  <ArrowR /> <FolderRed /> bio
                </Link>

                <Link
                  to={'/sobre/interests'}
                  className='flex gap-1 items-center text-[#90A1B9]  '
                >
                  <ArrowD2 /> <FolderGreen />
                  interests
                </Link>
                <p className='text-[#90A1B9] flex items-center gap-1 ml-4 text-[12px]'>
                  <Mark /> Áreas
                </p>
                <p className='text-[#90A1B9] flex items-center gap-1 ml-4 text-[12px]'>
                  <Mark /> Hobbies
                </p>
                <Link
                  to={'/sobre'}
                  className='flex gap-1 items-center text-[#90A1B9]  '
                >
                  <ArrowR /> <FolderBlue /> education
                </Link>
              </div>
            </div>

            <div className='flex flex-col w-full gap-4 '>
              <span className='flex items-center text-white  border-b border-t border-[#62748E] w-full justify-center py-3 '>
                <Arrow /> contact
              </span>
              <p className='flex text-[#90A1B9] text-[12px] items-center gap-2 px-6'>
                <MailIcon size={12} /> eduardohillfav@gmail.com
              </p>
              <p className='flex text-[#90A1B9] text-[12px] items-center gap-2 px-6 '>
                <Phone size={12} /> (32) 98833-5964
              </p>
            </div>
          </div>
          <div className='flex flex-col w-full h-full '>
            <div className='flex border-b border-b-[#62748E] w-full h-[52px]  '>
              <div className=' h-full w-[242px] flex items-center px-5 border-r border-r-[#62748E] justify-between text-[#90A1B9] '>
                interests
                <X size={16} />
              </div>
            </div>
            <div className='flex w-full h-full'>
              <div className='w-full flex justify-center gap-6 py-7 '>
                <div className='flex flex-col text-[#90A1B9]'>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                </div>
                <div className='flex flex-col text-[#90A1B9]'>
                  <span>/*</span>
                  <span>* Bio</span>
                  <span>* Sou um desenvolvedor Fullstack em formação</span>
                  <span>* com grande paixão por tecnologia e programação</span>
                  <span>* Tenho o objetivo de criar soluções inovadoras</span>
                  <span>* que impactem positivamente a vida das pessoas</span>
                  <span>* Acredito que o código é uma ferramenta poderosa</span>
                  <span>* para transformar ideias em realidade</span>
                  <span>* Atualmente, estou focado no desenvolvimento web</span>
                  <span>
                    * utilizando as tecnologias mais relevantes do mercado
                  </span>
                  <span>
                    * para criar projetos práticos, funcionais e de valor real{' '}
                  </span>

                  <span>*/</span>
                </div>
              </div>
              <div className='border-l border-r border-[#62748E] w-[50px] '></div>

              <div className='flex justify-center p-4'>
                <Code />
              </div>
              <div className='border-l border-r border-[#62748E] w-[50px]  '></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
