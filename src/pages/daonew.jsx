import * as THREE from 'three'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { Gltf, ScrollControls, useScroll } from '@react-three/drei'
import {getProject, val} from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import {editable as e, PerspectiveCamera, SheetProvider, useCurrentSheet} from '@theatre/r3f'
import PaffModel from '../components/PaffDAO'
import demoProjectState from '../state.json'
import Overlay from '../components/overlay'


// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project', {state :demoProjectState}).sheet('Demo Sheet')


if (window.location.pathname === '/dao'){
  studio.initialize()
  studio.extend(extension)
} else {}



const DaoNew = () => {
    return(
      <>
        <Canvas id='3d' gl={{ preserveDrawingBuffer: true }} style={{zIndex : "-99 !important", position: "fixed"}} >
          <ScrollControls pages={5}>
              <SheetProvider sheet={demoSheet}>
               <Scene/>
              </SheetProvider>
            </ScrollControls>
          </Canvas>
      </>
    )
}

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  const bgColor = "#84a4f4";

  return (
    <>
      <PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={75}/>
            <ambientLight/>
            <e.pointLight theatreKey='Light' position={[10, 10, 10]}/>
            <PaffModel/>
    </>
  );
}

export default DaoNew