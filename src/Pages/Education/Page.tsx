import { BookText, MailIcon, Phone, SquareTerminal, X } from 'lucide-react'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Arrow } from '../../images/ArrowD'
import { ArrowR } from '../../images/ArrowR'
import { FolderRed } from '../../images/FolderRed'
import { FolderGreen } from '../../images/FolderGreen'
import { FolderBlue } from '../../images/FolderBlue'
import { ArrowD2 } from '../../images/ArrowD2'
import { Mark } from '../../images/Markdown'
import { Code } from '../../components/Code'
import { Link } from 'react-router-dom'
import { TypeWriter } from '@/components/TypeWriter'

export function About() {
  return (
    <div className=' h-screen w-full bg-[#020618] p-3'>
      <div className='flex  flex-col  justify-between'>
        <div className=' h-[56px] '>
          <Header />
        </div>

        <div className='bg-[#0F172B] w-full h-[580px] border-l border-r border-[#62748E]  flex'>
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
                  <ArrowR /> <FolderGreen />
                  interests
                </Link>
                <Link
                  to={'/sobre'}
                  className='flex gap-1 items-center text-[#90A1B9]  '
                >
                  <ArrowD2 /> <FolderBlue /> education
                </Link>
                <p className='text-[#90A1B9] flex items-center gap-1 ml-4 text-[12px] '>
                  <Mark />
                  Universidade
                </p>
                <p className='text-[#90A1B9] flex items-center gap-1 ml-4 text-[12px]  '>
                  <Mark />
                  Cursos
                </p>
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
          <div className='flex flex-col w-full '>
            <div className='flex border-b border-b-[#62748E] w-full   '>
              <div className='  w-[242px] h-[48px] flex items-center px-5 border-r border-r-[#62748E] justify-between text-[#90A1B9] '>
                education
                <X size={16} />
              </div>
            </div>
            <div className='flex w-full'>
              <div className='w-full flex justify-center gap-6 py-7 border-r border-r-[#62748E] h-[630px] '>
                <TypeWriter />
              </div>

              <div className='flex justify-center p-4 w-1/2'>
                <Code />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
