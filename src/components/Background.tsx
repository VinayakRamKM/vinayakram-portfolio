import { useEffect } from 'react'

export function Background() {
  useEffect(() => {
    const root = document.documentElement
    const onMove = (e: MouseEvent) => {
      root.style.setProperty('--mx', `${(e.clientX / window.innerWidth) * 100}%`)
      root.style.setProperty('--my', `${(e.clientY / window.innerHeight) * 100}%`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-noise" />
    </div>
  )
}

export function ScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>('.progress')
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const value = max > 0 ? window.scrollY / max : 0
      if (bar) bar.style.width = `${value * 100}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="progress" />
}
