import * as THREE from 'three'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {getProject} from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import {editable as e, PerspectiveCamera, SheetProvider} from '@theatre/r3f'
import PaffModel from '../components/PaffDAO'


// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

studio.initialize()
studio.extend(extension)


const DaoNew = () => {
    return(
        <Canvas id='3d'>  
            <SheetProvider sheet={demoSheet}>
            <PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={75}/>
            <ambientLight/>
            <e.pointLight theatreKey='Light' position={[10, 10, 10]}/>
            <PaffModel/>
            <e.mesh theatreKey='cube'>
              <boxGeometry args={[1, 1, 1]}/>
              <meshStandardMaterial color="orange"/>
            </e.mesh> 
            </SheetProvider>
          </Canvas>
    )
}

export default DaoNew