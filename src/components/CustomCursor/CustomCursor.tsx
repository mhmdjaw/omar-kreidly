import React, { useEffect, useRef } from 'react'
import { Cursor, CursorContainer } from './styles'
import { isBrowser } from '@src/helpers'
import { SecondaryLogo } from '@src/assets/svg'
import { useGlobalContext } from '@src/context'

const CustomCursor: React.FC = () => {
  const { cursorType } = useGlobalContext()

  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const cursor = cursorRef.current as HTMLDivElement
      cursor.style.display = 'flex'
      const { clientX, clientY } = event
      // matrix is way faster than other options
      cursor.style.transform = `matrix(1, 0, 0, 1, ${clientX}, ${clientY})`
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
    <CursorContainer ref={cursorRef}>
      <Cursor hovered={cursorType === 'hovered'} hidden={cursorType === 'hidden'}>
        <SecondaryLogo />
      </Cursor>
    </CursorContainer>
  )
}

export default CustomCursor
