import { useEffect, useState } from 'react'

export function useTypewriter(
  lines: string[],
  typingSpeed = 55,
  pauseMs = 1600,
  deleteSpeed = 28,
) {
  const [lineIndex, setLineIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = lines[lineIndex] ?? ''
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setLineIndex((i) => (i + 1) % lines.length)
    } else {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1)
      timer = setTimeout(
        () => setText(next),
        deleting ? deleteSpeed : typingSpeed,
      )
    }

    return () => clearTimeout(timer)
  }, [text, deleting, lineIndex, lines, typingSpeed, pauseMs, deleteSpeed])

  return text
}
