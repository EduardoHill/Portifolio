import { useEffect, useState } from 'react'

export function TypeWriter() {
  const lines = [
    '/*',
    '* Universidade',
    '* Iniciei a faculdade em 2020',
    '* em engenharia ambiental na UFJF',
    '* porem em 2021.3 fiz a troca para',
    '* engenharia mecanica na UFJF',
    '* ',
    '* Cursos',
    '* Em janeiro de 2025 iniciei meus',
    '* estudos para formação de desenvolvedor',
    '* Full Stack na Codi Academy com termino',
    '* Alem desse curso tambem possuo',
    '* formação em Python pela Udemy',
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
    <div className='flex flex-col text-[#90A1B9] font-mono text-xl whitespace-pre leading-tight'>
      {displayedLines.map((line, i) => (
        <span key={i} className='text-xl'>
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
