import { useEffect, useState } from 'react'
import { Card } from '../components/CardProjetos'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { CSSIcon } from '../images/CSS'
import { HTMLIcon } from '../images/HTML'
import { ReactIcon } from '../images/React'

export function Project() {
  const [repo, setRepo] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simula barra de progresso aumentando enquanto carrega
    let intervalId: NodeJS.Timeout

    if (isLoading) {
      intervalId = setInterval(() => {
        setProgress((old) => {
          if (old >= 90) return old // não passa de 90 até o fetch terminar
          return old + 5
        })
      }, 200)
    }

    return () => clearInterval(intervalId)
  }, [isLoading])

  useEffect(() => {
    async function getProjects() {
      const response = await fetch(
        'https://api.github.com/users/EduardoHill/repos'
      )
      const data = await response.json()
      setRepo(data)
      setProgress(100) // completo
      setTimeout(() => {
        setIsLoading(false) // termina loading depois da barra completa
      }, 300)
    }

    getProjects()
  }, [])

  return (
    <div className='h-screen w-full bg-[#020618] p-3'>
      <div className='flex flex-col justify-between'>
        <Header />
        <div className='bg-[#0F172B] w-full border-l border-r border-[#62748E] flex flex-col items-center'>
          <div className='flex w-full'>
            <div className='flex flex-col border-r border-[#62748E] p-5'>
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

            {/* Área do map / cards */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-full h-[670px] overflow-y-auto justify-center items-center'>
              {isLoading ? (
                <div className='flex items-center justify-center w-full h-full p-4'>
                  <div className='w-1/2'>
                    <div className='w-full h-4 bg-transparent border border-white rounded overflow-hidden'>
                      <div
                        className='h-full bg-white transition-all duration-300 ease-in-out'
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                repo.map((repo: any, index: number) => (
                  <Card
                    key={repo.id}
                    name={repo.name}
                    description={repo.description}
                    full_name={repo.full_name}
                    index={index}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
