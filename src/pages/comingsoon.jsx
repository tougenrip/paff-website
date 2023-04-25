import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'

export default function ComingSoon() {
  return (
    <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
      <color attach="background" args={['black']} />
      <fog attach="fog" args={['black', 10, 20]} />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[0.26, 0.26, 0.26]} />
          <VideoText position={[0, 1.3, -2]} />
          <TVWall/>
          <Ground />
        </group>
        <ambientLight intensity={10} color={'white'}/>
        <directionalLight position={[-0, 0, -5]} intensity={100} color={'white'} /> 
        <Intro />
      </Suspense>
    </Canvas>
  )
}

function OldTV(props) {
  const {scene} = useGLTF('/retrotv.glb');
  scene.rotation.y= Math.PI + 1.6;
  return (
  
    <primitive object={scene} {...props}/>

  )
}

function TVWall(props) {
  return(
    <>
      <OldTV position={[0,-1,-4]} scale={[.75,.75,.75]}/>
    </>
  )
}

function Carla(props) {
  const { scene } = useGLTF('/carla-draco.glb')
  return <primitive object={scene} {...props} />
}

function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: 'video/paffvideobg.mp4', crossOrigin: 'Anonymous', loop: true, muted:true }))
  useEffect(() => void video.play(), [video])
  return (
    // <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
    //   soon
    //   <meshBasicMaterial toneMapped={false}>
    //     <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
    //   </meshBasicMaterial>
    // </Text>
    <mesh position={[0,.9,-3.5]} scale={.3}>
    <planeGeometry attach="geometry" args={[4.35, 3.35]}/>
    <meshPhysicalMaterial  >
         <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
    </meshPhysicalMaterial>
    </mesh>
  )
}

function Ground() {
  const [floor, normal] = useTexture(['SurfaceImperfections003_1K_var1.jpg', 'SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector blur={[400, 100]} resolution={1024} args={[20, 20]} mirror={1} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={.9} roughnessMap={floor} normalMap={normal} normalScale={[1, 1]} {...props} />}
    </Reflector>
  )
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
