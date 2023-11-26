import { useEffect, useState } from 'react'
import { sleep } from './general'

export const useMenuAnimation = () => {
  const [menuAnimationComplete, setMenuAnimationComplete] = useState(false)

  // if we don't wait the animation lags while the component renders images
  const waitForMenuAnimation = async () => {
    await sleep(300)
    setMenuAnimationComplete(true)
  }

  useEffect(() => {
    waitForMenuAnimation()
  }, [])

  return { menuAnimationComplete }
}
