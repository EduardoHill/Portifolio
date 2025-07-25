import { useEffect, useState } from 'react'
import { Card } from '../components/CardProjetos'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { CSSIcon } from '../images/CSS'
import { HTMLIcon } from '../images/HTML'
import { TypeScriptIcon } from '../images/TypeScript'
import { JavaScriptIcon } from '../images/JavaScript'

export function Project() {
  const [repo, setRepo] = useState([])
  const [filteredRepo, setFilteredRepo] = useState([])
  const [repoLanguages, setRepoLanguages] = useState<{ [key: string]: any }>({})
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [filters, setFilters] = useState({
    javascript: false,
    html: false,
    css: false,
    typescript: false,
  })
  const [searchTerm, setSearchTerm] = useState('')

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
      try {
        const response = await fetch(
          'https://api.github.com/users/EduardoHill/repos'
        )
        const data = await response.json()
        setRepo(data)
        setFilteredRepo(data)

        // Buscar linguagens para cada repositório
        const languagesData: { [key: string]: any } = {}
        const languagePromises = data.map(async (repository: any) => {
          try {
            const langResponse = await fetch(repository.languages_url)
            const languages = await langResponse.json()
            languagesData[repository.id] = languages
          } catch (error) {
            console.error(
              `Erro ao buscar linguagens para ${repository.name}:`,
              error
            )
            languagesData[repository.id] = {}
          }
        })

        await Promise.all(languagePromises)
        setRepoLanguages(languagesData)

        setProgress(100) // completo
        setTimeout(() => {
          setIsLoading(false) // termina loading depois da barra completa
        }, 300)
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
        setIsLoading(false)
      }
    }

    getProjects()
  }, [])

  // Função para aplicar filtros
  useEffect(() => {
    let filtered = repo

    // Filtro por termo de busca
    if (searchTerm) {
      filtered = filtered.filter(
        (repository: any) =>
          repository.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (repository.description &&
            repository.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
      )
    }

    // Filtros por tecnologia usando as linguagens reais dos repositórios
    if (
      filters.javascript ||
      filters.html ||
      filters.css ||
      filters.typescript
    ) {
      filtered = filtered.filter((repository: any) => {
        const name = repository.name.toLowerCase()
        const description = repository.description
          ? repository.description.toLowerCase()
          : ''
        const languages = repoLanguages[repository.id] || {}
        const languageList = Object.keys(languages).map((lang) =>
          lang.toLowerCase()
        )

        let matchesFilter = false

        // Filtro JavaScript
        if (filters.javascript) {
          const hasJS =
            languageList.includes('javascript') ||
            name.includes('js') ||
            name.includes('javascript') ||
            description.includes('javascript') ||
            description.includes('js')
          if (hasJS) {
            matchesFilter = true
          }
        }

        // Filtro HTML
        if (filters.html) {
          const hasHTML =
            languageList.includes('html') ||
            name.includes('html') ||
            description.includes('html') ||
            description.includes('website') ||
            description.includes('landing')
          if (hasHTML) {
            matchesFilter = true
          }
        }

        // Filtro CSS
        if (filters.css) {
          const hasCSS =
            languageList.includes('css') ||
            languageList.includes('scss') ||
            languageList.includes('sass') ||
            name.includes('css') ||
            description.includes('css') ||
            description.includes('style')
          if (hasCSS) {
            matchesFilter = true
          }
        }

        // Filtro TypeScript: busca por TypeScript OU projetos com .ts/.tsx
        if (filters.typescript) {
          const hasTS =
            languageList.includes('typescript') ||
            name.includes('typescript') ||
            name.includes('ts') ||
            description.includes('typescript') ||
            description.includes('ts') ||
            description.includes('tsx')
          if (hasTS) {
            matchesFilter = true
          }
        }

        return matchesFilter
      })
    }

    setFilteredRepo(filtered)
  }, [repo, filters, searchTerm, repoLanguages])

  // Função para lidar com mudanças nos filtros
  const handleFilterChange = (filterType: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: !prev[filterType],
    }))
  }

  // Função para limpar todos os filtros
  const clearAllFilters = () => {
    setFilters({
      javascript: false,
      html: false,
      css: false,
      typescript: false,
    })
    setSearchTerm('')
  }

  return (
    <div className='h-screen w-full bg-[#020618] p-3'>
      <div className='flex flex-col justify-between'>
        <Header />
        <div className='bg-[#0F172B] w-full border-l border-r border-[#62748E] flex flex-col items-center'>
          {/* Barra de pesquisa */}
          <div className='w-full p-4 border-b border-[#62748E]'>
            <input
              type='text'
              placeholder='Pesquisar projetos...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full px-4 py-2 bg-[#020618] border border-[#62748E] rounded text-white placeholder-[#90A1B9] focus:outline-none focus:border-indigo-500'
            />
          </div>

          <div className='flex w-full'>
            <div className='flex flex-col border-r border-[#62748E] p-5'>
              <h3 className='text-white mb-3 font-semibold'>
                Filtrar por tecnologia:
              </h3>
              <ul className='space-y-2'>
                <li className='flex gap-2'>
                  <input
                    type='checkbox'
                    id='javascript'
                    checked={filters.javascript}
                    onChange={() => handleFilterChange('javascript')}
                    className='accent-indigo-500'
                  />
                  <label
                    htmlFor='javascript'
                    className='flex items-center gap-1 text-white cursor-pointer'
                  >
                    <JavaScriptIcon /> JavaScript
                  </label>
                </li>
                <li className='flex gap-2'>
                  <input
                    type='checkbox'
                    id='typescript'
                    checked={filters.typescript}
                    onChange={() => handleFilterChange('typescript')}
                    className='accent-indigo-500'
                  />
                  <label
                    htmlFor='typescript'
                    className='flex items-center gap-1 text-white cursor-pointer'
                  >
                    <TypeScriptIcon /> TypeScript
                  </label>
                </li>
                <li className='flex gap-2'>
                  <input
                    type='checkbox'
                    id='html'
                    checked={filters.html}
                    onChange={() => handleFilterChange('html')}
                    className='accent-indigo-500'
                  />
                  <label
                    htmlFor='html'
                    className='flex items-center gap-1 text-white cursor-pointer'
                  >
                    <HTMLIcon /> HTML
                  </label>
                </li>
                <li className='flex gap-2'>
                  <input
                    type='checkbox'
                    id='css'
                    checked={filters.css}
                    onChange={() => handleFilterChange('css')}
                    className='accent-indigo-500'
                  />
                  <label
                    htmlFor='css'
                    className='flex items-center gap-1 text-white cursor-pointer'
                  >
                    <CSSIcon /> CSS
                  </label>
                </li>
              </ul>

              {/* Contador de resultados */}
              <div className='mt-4 pt-4 border-t border-[#62748E]'>
                <p className='text-[#90A1B9] text-sm mb-3'>
                  {filteredRepo.length} projeto
                  {filteredRepo.length !== 1 ? 's' : ''} encontrado
                  {filteredRepo.length !== 1 ? 's' : ''}
                </p>

                {/* Botão para limpar filtros */}
                {(searchTerm || Object.values(filters).some(Boolean)) && (
                  <button
                    onClick={clearAllFilters}
                    className='text-indigo-500 hover:text-indigo-400 text-sm underline transition-colors'
                  >
                    Limpar filtros
                  </button>
                )}
              </div>
            </div>

            {/* Área do map / cards */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-full h-[520px] overflow-y-auto justify-center items-start'>
              {isLoading ? (
                <div className='flex items-center justify-center w-full h-full p-4 col-span-full'>
                  <div className='w-1/2'>
                    <div className='w-full h-4 bg-transparent border border-white rounded overflow-hidden'>
                      <div
                        className='h-full bg-white transition-all duration-300 ease-in-out'
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : filteredRepo.length > 0 ? (
                filteredRepo.map((repository: any, index: number) => (
                  <Card
                    key={repository.id}
                    name={repository.name}
                    description={repository.description}
                    full_name={repository.full_name}
                    index={index}
                  />
                ))
              ) : (
                <div className='flex flex-col items-center justify-center w-full h-full p-4 col-span-full text-center'>
                  <div className='text-[#90A1B9] text-lg mb-2'>
                    Nenhum projeto encontrado
                  </div>
                  <div className='text-[#90A1B9] text-sm'>
                    Tente ajustar os filtros ou termo de pesquisa
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
