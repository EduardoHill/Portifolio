import { useEffect, useState } from 'react'
import { Card } from '../components/CardProjetos'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { CSSIcon } from '../images/CSS'
import { HTMLIcon } from '../images/HTML'
import { ReactIcon } from '../images/React'

export function Project() {
  const [repo, setRepo] = useState([])
  useEffect(() => {
    async function getProjects() {
      const response = await fetch(
        'https://api.github.com/users/EduardoHill/repos'
      )
      const data = await response.json()
      setRepo(data)
    }

    getProjects()
  }, [])
  return (
    <div className=' h-screen w-full bg-[#020618] p-3'>
      <div className='flex flex-col justify-between '>
        <div>
          <Header />
        </div>
        <div className='bg-[#0F172B]   w-full border-l border-r border-[#62748E] flex flex-col items-center'>
          <div className='flex w-full '>
            <div className='flex flex-col border-r border-[#62748E]  p-5'>
              <ul>
                <li className='flex gap-2'>
                  <input type='checkbox' />
                  <label className='flex items-center gap-1 text-white'>
                    <ReactIcon /> React
                  </label>
                </li>
                <li className='flex gap-2'>
                  <input type='checkbox' />
                  <label className='flex items-center gap-1 text-white'>
                    <HTMLIcon /> HTML
                  </label>
                </li>
                <li className='flex gap-2'>
                  <input type='checkbox' />
                  <label className='flex items-center gap-1 text-white'>
                    <CSSIcon /> CSS
                  </label>
                </li>
              </ul>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4  w-full p-4'>
              {repo.map((repo: any) => (
                <Card
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  full_name={repo.full_name}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
