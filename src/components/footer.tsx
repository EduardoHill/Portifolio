import { Instagram } from 'lucide-react'
import GitLogo from '../images/image.png'
import { Linkedin } from '../images/Lindein'

export function Footer() {
  return (
    <footer>
      <div className='bg-[#0F172B] flex justify-between items-center border border-[#62748E] rounded-b-2xl  h-[56px]  '>
        <div className='flex w-[735px] h-full text-[#90A1B9] '>
          <h1 className=' border-r border-[#62748E] flex items-center px-5 pr-24 '>
            _Find me:
          </h1>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/eduardo-hill-f%C3%A1vero/'
              target='_blank'
              className='border-r border-[#62748E] flex items-center px-5 '
            >
              <Linkedin />
            </a>
            <a
              href='https://www.instagram.com/du_hill/'
              target='_blank'
              className='border-r border-[#62748E] flex items-center px-5 '
            >
              <Instagram />
            </a>
          </div>
        </div>
        <div className='border-l border-[#62748E] h-full text-[#90A1B9] flex items-center px-6'>
          <a
            href='https://github.com/EduardoHill'
            target='_blank'
            className='flex gap-4'
          >
            @EduardoHill <img className='w-6 h-6 ' src={GitLogo} alt='' />
          </a>
        </div>
      </div>
    </footer>
  )
}
