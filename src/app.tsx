import { ChevronRight } from 'lucide-react'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Snake } from './components/snake'

export function App() {
  return (
    <div className=' h-screen w-full bg-[#020618] p-8'>
      <div className='flex flex-col justify-between h-full'>
        <Header />
        <div className='bg-[#0F172B] h-full w-full border-l border-r border-[#62748E] grid grid-cols-2 items-center'>
          <div className='ml-28'>
            <div className='flex flex-col gap-7'>
              <div>
                <span className='text-[#90A1B9] text-[18px] '>
                  Hello!! Eu sou:
                </span>
                <h1 className='text-[#F1F8FC] text-5xl '>
                  Eduardo Hill Fávero
                </h1>
                <h1 className=' text-indigo-500 text-2xl flex items-center '>
                  <ChevronRight /> Desenvolvedor Full-stack em aprendizado
                </h1>
              </div>
              <div className='flex flex-col'>
                <span className='text-[16px] text-[#90A1B9] '>
                  // complete o game para continuar
                </span>
                <span className='text-[16px] text-[#90A1B9] '>
                  // perfil no GitHub:
                </span>
                <span className='flex gap-4'>
                  <span className='text-indigo-500'>const</span>
                  <span className='text-teal-400'>githubLink</span>
                  <span className='text-white'>=</span>
                  <a href='#' className=' text-[#FFA1AD] underline'>
                    https://github.com/EduardoHill
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div>
            <Snake />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
