import { Link, useLocation } from 'react-router-dom'

type pathProps = {
  path: string | string[]
}

export function Header() {
  const location = useLocation()
  const isActive = ({ path }: pathProps) => {
    if (typeof path === 'string') {
      return location.pathname === path
    } else {
      return path.includes(location.pathname)
    }
  }
  return (
    <div className='bg-[#0F172B] flex justify-between items-center border border-[#62748E] rounded-t-2xl  h-[56px]  '>
      <div className='flex w-[735px] h-full text-[#90A1B9] '>
        <h1 className=' border-r border-[#62748E] flex items-center px-5 pr-24 '>
          Eduardo Hill
        </h1>
        <div className='flex'>
          <Link
            to={'/'}
            className={`border-r border-[#62748E]  flex items-center px-5 ${
              isActive({ path: '/' })
                ? 'border-b-2 border-b-[#FFB86B] '
                : 'border-[#62748E]'
            } `}
          >
            _hello
          </Link>
          <Link
            to={'/sobre'}
            className={`border-r border-[#62748E]  flex items-center px-5 ${
              isActive({ path: ['/sobre', '/sobre/bio', '/sobre/interests'] })
                ? 'border-b-2 border-b-[#FFB86B] '
                : 'border-[#62748E]'
            } `}
          >
            _about-me
          </Link>
          <Link
            to={'/projetos'}
            className={`border-r border-[#62748E]  flex items-center px-5 ${
              isActive({ path: '/projetos' })
                ? 'border-b-2 border-b-[#FFB86B] '
                : 'border-[#62748E]'
            } `}
          >
            _projects
          </Link>
        </div>
      </div>
      <div className='border-l border-[#62748E] h-full text-[#90A1B9] flex items-center px-6'>
        <a href='#'>_contact</a>
      </div>
    </div>
  )
}
