import { useEffect, useState } from 'react'

export function TypeWriter2() {
  const lines = [
    '/*',
    '* Bio',
    '* Sou um desenvolvedor Fullstack em formação',
    '* com grande paixão por tecnologia e programação',
    '* Tenho o objetivo de criar soluções inovadoras',
    '* que impactem positivamente a vida das pessoas',
    '* Acredito que o código é uma ferramenta poderosa',
    '* para transformar ideias em realidade',
    '* estou focado no desenvolvimento web utilizando-as',
    '* tecnologias mais relevantes do mercado',
    '* para criar projetos práticos',
    '* funcionais e de valor real',
    '*/',
  ]

  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex < lines.length) {
      const line = lines[lineIndex]

      if (charIndex < line.length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + line[charIndex])
          setCharIndex((prev) => prev + 1)
        }, 15) // velocidade da digitação por letra

        return () => clearTimeout(timeout)
      } else {
        // Fim da linha atual: move para a próxima
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, line])
          setCurrentLine('')
          setLineIndex((prev) => prev + 1)
          setCharIndex(0)
        }, 200) // tempo de espera entre as linhas

        return () => clearTimeout(timeout)
      }
    }
  }, [charIndex, lineIndex, lines])

  return (
    <div className='flex flex-col text-[#90A1B9] font-mono text-2xl whitespace-pre leading-tight'>
      {displayedLines.map((line, i) => (
        <span key={i} className='text-2xl'>
          {line}
        </span>
      ))}
      {lineIndex < lines.length && (
        <span>
          {currentLine}
          <span className='animate-pulse text-white'>|</span>
        </span>
      )}
    </div>
  )
}
