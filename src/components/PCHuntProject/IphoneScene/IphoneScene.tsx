import React, { useEffect, useMemo } from 'react'
import { lazy } from 'react'
import { Canvas } from '@react-three/offscreen'
import { useInView } from 'react-intersection-observer'
import { useFrame } from '@react-three/fiber'

// This is the fallback component that will be rendered on the main thread
// This will happen on systems where OffscreenCanvas is not supported
const Scene = lazy(() => import('./Scene'))

const DisableRender = () => useFrame(() => null, 1000)

const IphoneScene = () => {
  // This is the worker thread that will render the scene
  const worker = useMemo(() => new Worker(new URL('./Worker.tsx', import.meta.url), { type: 'module' }), [])

  const { ref, inView } = useInView()

  useEffect(
    () => {
      return () => worker.terminate()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <div ref={ref} style={{ position: 'relative', height: '100%' }}>
      <Canvas
        worker={worker}
        fallback={
          <>
            {!inView && <DisableRender />}
            <Scene />
          </>
        }
      />
    </div>
  )
}

export default IphoneScene
