import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const gridSize = 10
const initialSnake = [{ x: 5, y: 5 }]
const initialFood = { x: 3, y: 3 }

export function Snake() {
  const [snake, setSnake] = useState(initialSnake)
  const [food, setFood] = useState(initialFood)
  const [direction, setDirection] = useState({ x: 0, y: 0 })
  const [eaten, setEaten] = useState(0)
  const navigate = useNavigate()

  const directionRef = useRef(direction)
  const snakeRef = useRef(snake)
  const foodRef = useRef(food)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    directionRef.current = direction
  }, [direction])

  useEffect(() => {
    snakeRef.current = snake
  }, [snake])

  useEffect(() => {
    foodRef.current = food
  }, [food])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') setDirection({ x: 0, y: -1 })
      if (e.key === 'ArrowDown') setDirection({ x: 0, y: 1 })
      if (e.key === 'ArrowLeft') setDirection({ x: -1, y: 0 })
      if (e.key === 'ArrowRight') setDirection({ x: 1, y: 0 })
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (eaten >= 10) {
      navigate('/sobre')
    }
  }, [eaten, navigate])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const prev = snakeRef.current
      const dir = directionRef.current
      const food = foodRef.current

      const newHead = {
        x: (prev[0].x + dir.x + gridSize) % gridSize,
        y: (prev[0].y + dir.y + gridSize) % gridSize,
      }

      const isEating = newHead.x === food.x && newHead.y === food.y

      if (isEating) {
        const newFood = {
          x: Math.floor(Math.random() * gridSize),
          y: Math.floor(Math.random() * gridSize),
        }
        setFood(newFood)
        setSnake([newHead, ...prev])
        setEaten((e) => e + 1)
      } else {
        setSnake([newHead, ...prev.slice(0, -1)])
      }
    }, 200)

    return () => clearInterval(intervalRef.current!)
  }, [])

  const startGame = () => {
    setSnake(initialSnake)
    setDirection({ x: 1, y: 0 })
    setEaten(0)
    setFood(initialFood)
  }

  const handleMove = (dir: 'up' | 'down' | 'left' | 'right') => {
    if (dir === 'up') setDirection({ x: 0, y: -1 })
    if (dir === 'down') setDirection({ x: 0, y: 1 })
    if (dir === 'left') setDirection({ x: -1, y: 0 })
    if (dir === 'right') setDirection({ x: 1, y: 0 })
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-gradient-to-br from-teal-900 to-slate-900 p-6 rounded-xl border-[#62748E] border-t shadow-xl flex gap-6'>
        <div className='bg-[#0c1221] w-60 h-80 rounded-lg flex items-center justify-center relative'>
          <div className='grid grid-cols-10 grid-rows-10 gap-[2px]'>
            {[...Array(gridSize * gridSize)].map((_, i) => {
              const x = i % gridSize
              const y = Math.floor(i / gridSize)
              const isSnake = snake.some((s) => s.x === x && s.y === y)
              const isFood = food.x === x && food.y === y
              return (
                <div
                  key={i}
                  className={`w-5 h-5 ${
                    isSnake
                      ? 'bg-green-400'
                      : isFood
                      ? 'bg-red-400'
                      : 'bg-slate-800'
                  } rounded-sm`}
                />
              )
            })}
          </div>
          <button
            onClick={startGame}
            className='absolute bottom-4 px-4 py-1 bg-orange-400 text-black font-mono rounded hover:bg-orange-300 transition'
          >
            start-game
          </button>
        </div>

        <div className='flex flex-col gap-4 text-sm text-white'>
          <div>
            <p>
              // use as setas do teclado
              <br />
              ou
              <br />
              // use as setas do jogo
            </p>
            <div className='grid grid-cols-3 gap-1 mt-2'>
              <div></div>
              <button onClick={() => handleMove('up')}>
                <ArrowBtn keyName='↑' />
              </button>
              <div></div>
              <button onClick={() => handleMove('left')}>
                <ArrowBtn keyName='←' />
              </button>
              <button onClick={() => handleMove('down')}>
                <ArrowBtn keyName='↓' />
              </button>
              <button onClick={() => handleMove('right')}>
                <ArrowBtn keyName='→' />
              </button>
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
                    className={`w-2 h-2 rounded-full shadow-md ${
                      i < eaten ? 'bg-green-300' : 'bg-cyan-300 animate-pulse'
                    }`}
                  />
                ))}
            </div>
          </div>

          <Link
            to={'/sobre'}
            className='self-end px-3 py-1 border border-white rounded-md text-xs hover:bg-white hover:text-black transition'
          >
            skip
          </Link>
        </div>
      </div>
    </div>
  )
}

function ArrowBtn({ keyName }: { keyName: string }) {
  return (
    <div className='bg-black text-white text-sm p-1 rounded shadow-inner text-center'>
      {keyName}
    </div>
  )
}
