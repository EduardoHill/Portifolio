type CardProps = {
  name: string
  description: string
  index: number
  full_name: string
}
import ProjFt from '../images/ProjectImg.png'
const Base_Url = 'https://github.com/'
export function Card({ name, description, full_name, index }: CardProps) {
  return (
    <div className=' flex flex-col w-[300px] '>
      <div className='flex'>
        <h1 className='text-indigo-500'>{`Projeto ${index + 1}`}</h1>
        <span className='text-[#90A1B9]'>{`// ${name}`} </span>
      </div>
      <div>
        <img
          src={ProjFt}
          alt=''
          className=' bg-white w-[270px] h-[130px] rounded-t-2xl object-cover '
        />
        <div className='bg-slate-950 w-[270px] h-[130px] flex flex-col rounded-b-2xl gap-5 p-4'>
          <h1 className='text-[#90A1B9] line-clamp-2'>{description}</h1>
          <div>
            <a
              href={Base_Url + full_name}
              className='bg-slate-600 text-white px-2 py-1 rounded-[8px] cursor-pointer '
            >
              Ver projeto
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
