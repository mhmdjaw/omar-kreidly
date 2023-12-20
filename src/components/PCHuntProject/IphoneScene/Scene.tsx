import React, { Suspense, useLayoutEffect, useRef } from 'react'
import { PerspectiveCameraProps, useThree } from '@react-three/fiber'
import { Environment, Html, Loader, OrbitControls } from '@react-three/drei'
import Iphone from './Iphone'
import * as THREE from 'three'
import { isBrowser } from '@src/helpers'

const MyCamera = (props: PerspectiveCameraProps) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const set = useThree((state) => state.set)
  const size = useThree(({ size }) => size)

  useLayoutEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.aspect = size.width / size.height
      cameraRef.current.updateProjectionMatrix()
    }
  }, [size, props])

  useLayoutEffect(
    () => {
      set({ camera: cameraRef.current as THREE.PerspectiveCamera })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <perspectiveCamera ref={cameraRef as React.Ref<THREE.PerspectiveCamera> | undefined} {...props} />
}

const Scene: React.FC = () => {
  return (
    <>
      <MyCamera fov={75} near={0.1} far={1000} position={[0, 0, 5]} zoom={1}>
        <pointLight intensity={3} position={[5, 4.3, -2]} decay={0} />
        <spotLight intensity={16} position={[0, 15, -5]} decay={0} />
      </MyCamera>
      <OrbitControls
        autoRotate
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        setAzimuthalAngle={() => Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
      <Suspense
        fallback={
          isBrowser ? (
            <Html>
              <Loader />
            </Html>
          ) : null
        }
      >
        <Iphone scale={0.3} />
        <Environment preset="dawn" />
      </Suspense>
    </>
  )
}

export default Scene
