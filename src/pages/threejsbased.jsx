import * as THREE from 'three'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { Gltf, ScrollControls, useScroll, Scroll, Sky, Stars, Cloud, Sphere, Select } from '@react-three/drei'
import {getProject, val} from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import {editable as e, PerspectiveCamera, OrthographicCamera, SheetProvider, useCurrentSheet} from '@theatre/r3f'
import daoProjectStage from '../state.json'
import mindmapState from '../mindmapstate.json'
import PaffModel from '../components/PaffDAO'
import Overlay from '../components/overlay'

var daoSheet = getProject('Demo Project', {state: mindmapState}).sheet('Demo Sheet')
var mindmapsheet = getProject('MindMap').sheet("MMSheet")


if (window.location.pathname === '/daosesesedad' )  {
  
  studio.initialize()
  studio.extend(extension)
} else {}


const DaoNew = () => {
    return(
      <>
        <Canvas id='3d' gl={{ preserveDrawingBuffer: true }} style={{zIndex : "-99 !important", position: "fixed"}} >
          <ScrollControls pages={4}>
            <Scroll html={true} style={{width: '100%'}} >
              <Overlay/>
            </Scroll>  
            <SheetProvider sheet={daoSheet}>
              <Dao/>
            </SheetProvider>
          </ScrollControls>
        </Canvas>
      </>
    )
}

export const MindMap = () => {
  return(
    <>
      <Canvas>
        <SheetProvider sheet={mindmapsheet}>
          <MindMapScene/>
        </SheetProvider>
      </Canvas>
    </>
  )
}

function Dao() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={80} near={0.01} far={500} zoom={1} />
            <ambientLight/>
            <e.pointLight theatreKey='Light' position={[10, 10, 10]}/>
            <Stars/>
            <PaffModel/>
    </>
  );
}

function MindMapScene() {
  const sheet = useCurrentSheet();


  return (
    <>
        <PerspectiveCamera theatreKey='Camera' makeDefault position={[0,0,0]} far={0} near={0.01} fov={75} zoom={1}/>
          <Stars/>
          <e.mesh theatreKey='cube'>
            <sphereGeometry position={[0,0,5]} scale={[2,2,2]}/>
            <sphereGeometry position={[0,5,5]} scale={[2,2,2]}/>
            <sphereGeometry position={[5,0,5]} scale={[2,2,2]}/>
            <sphereGeometry position={[5,5,5]} scale={[2,2,2]}/>
            <meshBasicMaterial color={0xffffff}/>
          </e.mesh>
        <e.ambientLight theatreKey='light'/>
    </>
  )
}

export default DaoNew;
