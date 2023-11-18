import { useEffect, useState } from 'react'
import { isBrowser } from '../helpers'
import { CursorType, State } from './global-provider-types'

const useGlobalProvider = () => {
  const [state, setState] = useState<State>({ cursorType: 'unhovered' })

  useEffect(() => {
    if (isBrowser) {
      document.body.style.visibility = 'visible'
    }

    const handleResize = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    if (isBrowser) {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const onCursor = (cursorType: CursorType) => {
    setState({ cursorType })
  }

  return { cursorType: state.cursorType, onCursor }
}

export default useGlobalProvider
