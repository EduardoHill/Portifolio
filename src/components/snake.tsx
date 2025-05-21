type ArrowBTNProps = {
  keyName: string
}

export function Snake() {
  const ArrowBtn = ({ keyName }: ArrowBTNProps) => (
    <div className='bg-black text-white text-sm p-1 rounded shadow-inner text-center'>
      {keyName}
    </div>
  )
  return (
    <div className='flex items-center justify-center'>
      <div className='bg-gradient-to-br from-teal-900 to-slate-900 p-6 rounded-xl border-[#62748E] border-t  shadow-xl flex gap-6'>
        <div className='bg-[#0c1221] w-60 h-80 rounded-lg flex items-center justify-center relative'>
          <button className='absolute bottom-4 px-4 py-1 bg-orange-400 text-black font-mono rounded hover:bg-orange-300 transition'>
            start-game
          </button>
        </div>

        <div className='flex flex-col gap-4 text-sm text-white '>
          <div>
            <div>
              <p>
                // use as setas do teclado
                <br />
                ou
                <br />
                // use as setas do jogo
              </p>
              <div className='grid grid-cols-3 gap-1 mt-2 '>
                <div></div>
                <button>
                  <ArrowBtn keyName='↑' />
                </button>
                <div></div>
                <button>
                  <ArrowBtn keyName='←' />
                </button>
                <button>
                  <ArrowBtn keyName='↓' />
                </button>
                <button>
                  <ArrowBtn keyName='→' />
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>// food left</p>
            <div className='grid grid-cols-5 gap-1 mt-2'>
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className='w-2 h-2 bg-cyan-300 rounded-full shadow-md animate-pulse'
                  />
                ))}
            </div>
          </div>

          <button className='self-end px-3 py-1 border border-white rounded-md text-xs hover:bg-white hover:text-black transition'>
            skip
          </button>
        </div>
      </div>
    </div>
  )
}
