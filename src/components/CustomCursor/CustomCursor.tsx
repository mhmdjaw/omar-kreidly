import React, { useEffect, useRef } from 'react'
import { SecondaryLogo } from '../../assets/svg'
import { useGlobalContext } from '../../context'
import { isBrowser } from '../../helpers'
import { Cursor } from './custom-cursor-styles'

const CustomCursor: React.FC = () => {
  const { cursorType } = useGlobalContext()

  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const cursor = cursorRef.current as HTMLDivElement
      cursor.style.display = 'block'
      const { clientX, clientY } = event
      cursor.style.left = `${clientX}px`
      cursor.style.top = `${clientY}px`
    }

    if (isBrowser) {
      document.addEventListener('mousemove', onMouseMove)
    }

    const onFirstTouch = () => {
      const cursor = cursorRef.current as HTMLDivElement
      cursor.style.display = 'none'
      window.removeEventListener('touchstart', onFirstTouch, false)
      document.removeEventListener('mousemove', onMouseMove)
    }

    if (isBrowser) {
      window.addEventListener('touchstart', onFirstTouch, false)
    }

    return () => {
      if (isBrowser) {
        document.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('touchstart', onFirstTouch, false)
      }
    }
  }, [])

  return (
    <Cursor hovered={cursorType === 'hovered'} ref={cursorRef}>
      <SecondaryLogo />
    </Cursor>
  )
}

export default CustomCursor
