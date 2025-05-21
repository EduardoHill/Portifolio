import { Footer } from '../components/footer'
import { Header } from '../components/header'

export function About() {
  return (
    <div className=' h-screen w-full bg-[#020618] p-8'>
      <div className='flex flex-col justify-between h-full'>
        <Header />
        <div className='bg-[#0F172B] h-full w-full border-l border-r border-[#62748E] grid grid-cols-2 items-center'></div>
        <Footer />
      </div>
    </div>
  )
}
