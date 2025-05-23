import { MessageCircleMore, Star } from 'lucide-react'
import Foto from '../images/WhatsApp Image 2025-05-15 at 11.04.54 (1).jpeg'
import { CodeBlock } from '../images/CodeBlock'
import { CodeBlock2 } from '../images/Codeblock2'

export function Code() {
  return (
    <div className='flex flex-col gap-9 w-full'>
      <span className='text-[#90A1B9] p-2'>// Code snippet showcase:</span>
      <div className='w-full'>
        <div className='flex  items-center gap-3 justify-between '>
          <div className='flex items-center gap-2'>
            <img
              src={Foto}
              alt=''
              className='w-[34px] h-[34px] object-cover rounded-[50%] '
            />
            <div className='flex flex-col text-[#90A1B9] text-[14px] '>
              <span className='text-indigo-500'>@EduardoHill</span>
              <span>Created 2 months ago</span>
            </div>
          </div>
          <div className='flex text-[#90A1B9] gap-3 '>
            <span className='flex items-center gap-1'>
              <MessageCircleMore size={16} /> details
            </span>
            <span className='flex items-center gap-1'>
              <Star size={16} /> 2 stars
            </span>
          </div>
        </div>
        <div className='flex items-center justify-center h-fit'>
          <CodeBlock2 />
        </div>
      </div>
      <div className='w-full'>
        <div className='flex  items-center gap-3 justify-between '>
          <div className='flex items-center gap-2'>
            <img
              src={Foto}
              alt=''
              className='w-[34px] h-[34px] object-cover rounded-[50%] '
            />
            <div className='flex flex-col text-[#90A1B9] text-[14px] '>
              <span className='text-indigo-500'>@EduardoHill</span>
              <span>Created 1 months ago</span>
            </div>
          </div>
          <div className='flex text-[#90A1B9] gap-3 '>
            <span className='flex items-center gap-1'>
              <MessageCircleMore size={16} /> details
            </span>
            <span className='flex items-center gap-1'>
              <Star size={16} /> 1 stars
            </span>
          </div>
        </div>
        <div className='flex h-fit items-center justify-center'>
          <CodeBlock />
        </div>
      </div>
    </div>
  )
}
