import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [hot, setHot] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    document.body.classList.add('has-cursor')

    let x = 0
    let y = 0
    let rx = 0
    let ry = 0

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      const target = e.target as HTMLElement | null
      setHot(Boolean(target?.closest('a, button, input, textarea, .card, .skill')))
    }

    const tick = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
    }

    let running = true
    const loop = () => {
      if (!running) return
      tick()
      requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    requestAnimationFrame(loop)
    return () => {
      running = false
      window.removeEventListener('mousemove', onMove)
      document.body.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor" />
      <div ref={ring} className={`cursor-ring${hot ? ' hot' : ''}`} />
    </>
  )
}
