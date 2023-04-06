/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 PaffDAO.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { angleToRadians } from '../utils/angle'

export default function PaffModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../models/PaffDAO.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.root} />
          <primitive object={nodes.neutral_bone} />
          <primitive object={nodes.neutral_bone_1} />
          <primitive object={nodes.neutral_bone_2} />
          <primitive object={nodes.neutral_bone_3} />
          <primitive object={nodes.neutral_bone_4} />
          <primitive object={nodes.neutral_bone_5} />
          <primitive object={nodes.neutral_bone_6} />
          <primitive object={nodes.neutral_bone_7} />
          <primitive object={nodes.neutral_bone_8} />
          <primitive object={nodes.neutral_bone_9} />
          <skinnedMesh name="merged_gate" geometry={nodes.merged_gate.geometry} material={materials['sky_sketchfab.001']} skeleton={nodes.merged_gate.skeleton} />
          <skinnedMesh name="merged_gate003" geometry={nodes.merged_gate003.geometry} material={materials['final_gate_low.001']} skeleton={nodes.merged_gate003.skeleton} />
          <skinnedMesh name="merged_gate005" geometry={nodes.merged_gate005.geometry} material={materials['final_alfa.001']} skeleton={nodes.merged_gate005.skeleton} />
          <skinnedMesh name="merged_gate006" geometry={nodes.merged_gate006.geometry} material={materials['final_gate_top.001']} skeleton={nodes.merged_gate006.skeleton} />
          <skinnedMesh name="merged_gate007" geometry={nodes.merged_gate007.geometry} material={materials['final_C.005']} skeleton={nodes.merged_gate007.skeleton} />
          <skinnedMesh name="merged_gate008" geometry={nodes.merged_gate008.geometry} material={materials['final_B.001']} skeleton={nodes.merged_gate008.skeleton} />
          <skinnedMesh name="merged_gate009" geometry={nodes.merged_gate009.geometry} material={materials['final_SOMT.001']} skeleton={nodes.merged_gate009.skeleton} />
          <skinnedMesh name="merged_gate010" geometry={nodes.merged_gate010.geometry} material={materials['final_E.001']} skeleton={nodes.merged_gate010.skeleton} />
          <skinnedMesh name="merged_gate011" geometry={nodes.merged_gate011.geometry} material={materials['final_A.001']} skeleton={nodes.merged_gate011.skeleton} />
          <skinnedMesh name="merged_gate012" geometry={nodes.merged_gate012.geometry} material={materials['final_rope.001']} skeleton={nodes.merged_gate012.skeleton} />
        </group>
        <group name="armature_balloon" position={[-0.33, 1.15, -41.91]} rotation={[0, -0.95, 0]}>
          <primitive object={nodes.main} />
          <group name="balloon_1">
            <skinnedMesh name="Plane032" geometry={nodes.Plane032.geometry} material={materials.airship} skeleton={nodes.Plane032.skeleton} />
            <skinnedMesh name="Plane032_1" geometry={nodes.Plane032_1.geometry} material={materials.trims} skeleton={nodes.Plane032_1.skeleton} />
          </group>
        </group>
        <mesh name="characters" geometry={nodes.characters.geometry} material={materials.STONE_a} />
        <mesh name="characters002" geometry={nodes.characters002.geometry} material={materials.watermill} />
        <mesh name="characters003" geometry={nodes.characters003.geometry} material={materials.terrain_left} />
        <mesh name="characters004" geometry={nodes.characters004.geometry} material={materials.house} />
        <mesh name="characters005" geometry={nodes.characters005.geometry} material={materials.bridge} />
        <mesh name="characters006" geometry={nodes.characters006.geometry} material={materials.tree} />
        <mesh name="characters007" geometry={nodes.characters007.geometry} material={materials.bush} />
        <mesh name="characters009" geometry={nodes.characters009.geometry} material={materials.terrain_right} />
        <mesh name="characters010" geometry={nodes.characters010.geometry} material={materials.wheat} />
        <mesh name="merged_gate002" geometry={nodes.merged_gate002.geometry} material={materials['final_C.005']} position={[-45.41, -15.33, 0.68]} rotation={[Math.PI, -0.54, Math.PI]} scale={0.7} />
        <mesh name="merged_gate001" geometry={nodes.merged_gate001.geometry} material={materials['final_C.005']} position={[-43.17, -14.42, 0.09]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate004" geometry={nodes.merged_gate004.geometry} material={materials['final_C.005']} position={[-40.52, -13.4, -0.18]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate013" geometry={nodes.merged_gate013.geometry} material={materials['final_C.005']} position={[-38.57, -12.6, -0.65]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate014" geometry={nodes.merged_gate014.geometry} material={materials['final_C.005']} position={[-36.39, -12.03, -1.08]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate015" geometry={nodes.merged_gate015.geometry} material={materials['final_C.005']} position={[-34.26, -11.18, -1.84]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate016" geometry={nodes.merged_gate016.geometry} material={materials['final_C.005']} position={[-32.27, -10.27, -2.4]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate017" geometry={nodes.merged_gate017.geometry} material={materials['final_C.005']} position={[-30.04, -8.9, -2.93]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate018" geometry={nodes.merged_gate018.geometry} material={materials['final_C.005']} position={[-27.77, -7.6, -3.54]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate019" geometry={nodes.merged_gate019.geometry} material={materials['final_C.005']} position={[-25.59, -6.23, -4.25]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate020" geometry={nodes.merged_gate020.geometry} material={materials['final_C.005']} position={[-23.65, -5.15, -4.87]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate021" geometry={nodes.merged_gate021.geometry} material={materials['final_C.005']} position={[-21.65, -3.79, -5.34]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate022" geometry={nodes.merged_gate022.geometry} material={materials['final_C.005']} position={[-19.66, -2.42, -5.91]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate023" geometry={nodes.merged_gate023.geometry} material={materials['final_C.005']} position={[-17.53, -1.4, -6.48]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate024" geometry={nodes.merged_gate024.geometry} material={materials['final_C.005']} position={[-15.4, -0.03, -7.1]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate025" geometry={nodes.merged_gate025.geometry} material={materials['final_C.005']} position={[-13.55, 1.39, -7.66]} rotation={[3.12, -0.6, 3.09]} scale={0.7} />
        <mesh name="merged_gate026" geometry={nodes.merged_gate026.geometry} material={materials['final_C.005']} position={[-17.93, 0.08, 21.29]} rotation={[3.05, -1.34, 3.02]} scale={0.48} />
        <mesh name="merged_gate027" geometry={nodes.merged_gate027.geometry} material={materials['final_C.005']} position={[-17.07, 0.76, 20.09]} rotation={[3.07, -1.27, 3.04]} scale={0.48} />
        <mesh name="merged_gate028" geometry={nodes.merged_gate028.geometry} material={materials['final_C.005']} position={[-15.78, 1.06, 19.2]} rotation={[3.11, -0.91, 3.08]} scale={0.48} />
        <mesh name="merged_gate029" geometry={nodes.merged_gate029.geometry} material={materials['final_C.005']} position={[-14.29, 1.28, 18.85]} rotation={[3.12, -0.56, 3.09]} scale={0.48} />
        <mesh name="merged_gate030" geometry={nodes.merged_gate030.geometry} material={materials['final_C.005']} position={[-12.95, 1.71, 18.85]} rotation={[3.12, -0.34, 3.1]} scale={0.48} />
        <mesh name="merged_gate031" geometry={nodes.merged_gate031.geometry} material={materials['final_C.005']} position={[-11.51, 2.02, 18.9]} rotation={[3.12, -0.25, 3.1]} scale={0.48} />
        <mesh name="merged_gate032" geometry={nodes.merged_gate032.geometry} material={materials['final_C.005']} position={[-10.12, 2.27, 19]} rotation={[3.12, -0.25, 3.1]} scale={0.48} />
        <mesh name="merged_gate033" geometry={nodes.merged_gate033.geometry} material={materials['final_C.005']} position={[-8.88, 2.6, 19]} rotation={[3.12, -0.53, 3.1]} scale={0.48} />
        <mesh name="merged_gate034" geometry={nodes.merged_gate034.geometry} material={materials['final_C.005']} position={[-7.54, 3, 18.7]} rotation={[3.11, -0.75, 3.09]} scale={0.48} />
        <mesh name="merged_gate035" geometry={nodes.merged_gate035.geometry} material={materials['final_C.005']} position={[-6.39, 3.37, 18.21]} rotation={[3.11, -0.84, 3.08]} scale={0.48} />
        <mesh name="merged_gate036" geometry={nodes.merged_gate036.geometry} material={materials['final_C.005']} position={[-5.3, 3.75, 17.61]} rotation={[3.11, -0.92, 3.08]} scale={0.48} />
        <mesh name="merged_gate037" geometry={nodes.merged_gate037.geometry} material={materials['final_C.005']} position={[-51.93, -14.42, 5.8]} rotation={[3.09, 1.15, -3.13]} scale={0.7} />
        <mesh name="merged_gate038" geometry={nodes.merged_gate038.geometry} material={materials['final_C.005']} position={[-51.65, -13.96, 7.48]} rotation={[3.11, 0.95, 3.14]} scale={0.7} />
        <mesh name="merged_gate039" geometry={nodes.merged_gate039.geometry} material={materials['final_C.005']} position={[-44.55, -13.14, 15.56]} rotation={[3.12, 0.42, 3.12]} scale={0.7} />
        <mesh name="merged_gate040" geometry={nodes.merged_gate040.geometry} material={materials['final_C.005']} position={[-43.25, -12.19, 16.74]} rotation={[3.12, 0.42, 3.12]} scale={0.7} />
        <mesh name="merged_gate041" geometry={nodes.merged_gate041.geometry} material={materials['final_C.005']} position={[-41.9, -11.14, 18.05]} rotation={[3.12, 0.34, 3.11]} scale={0.7} />
        <mesh name="merged_gate042" geometry={nodes.merged_gate042.geometry} material={materials['final_C.005']} position={[-40.57, -9.58, 19.2]} rotation={[3.12, 0.36, 3.12]} scale={0.7} />
        <mesh name="merged_gate043" geometry={nodes.merged_gate043.geometry} material={materials['final_C.005']} position={[-39.15, -8.36, 20.34]} rotation={[3.12, 0.34, 3.11]} scale={0.7} />
        <mesh name="merged_gate044" geometry={nodes.merged_gate044.geometry} material={materials['final_C.005']} position={[-37.83, -6.84, 21.61]} rotation={[3.12, 0.21, 3.11]} scale={0.7} />
        <mesh name="merged_gate045" geometry={nodes.merged_gate045.geometry} material={materials['final_C.005']} position={[-36.35, -5.4, 22.71]} rotation={[3.12, 0.21, 3.11]} scale={0.7} />
        <mesh name="merged_gate046" geometry={nodes.merged_gate046.geometry} material={materials['final_C.005']} position={[-34.88, -4.13, 23.77]} rotation={[3.12, 0.17, 3.11]} scale={0.7} />
        <mesh name="merged_gate047" geometry={nodes.merged_gate047.geometry} material={materials['final_C.005']} position={[-33.19, -2.67, 24.72]} rotation={[3.12, 0.16, 3.11]} scale={0.7} />
        <mesh name="merged_gate048" geometry={nodes.merged_gate048.geometry} material={materials['final_C.005']} position={[-31.69, -1.25, 25.76]} rotation={[3.12, 0.25, 3.11]} scale={0.7} />
        <mesh name="foliage" geometry={nodes.foliage.geometry} material={materials.baked_flowers} position={[-27.98, 0, 27.69]} rotation={[-Math.PI, 1.32, -Math.PI]} scale={2.03} />
        <mesh name="ropes" geometry={nodes.ropes.geometry} material={materials.baked_rope} position={[-27.98, 0, 27.69]} rotation={[-Math.PI, 1.32, -Math.PI]} scale={2.03} />
        <mesh name="oreada" geometry={nodes.oreada.geometry} material={materials.baked_oreada} position={[-27.98, 0, 27.69]} rotation={[-Math.PI, 1.32, -Math.PI]} scale={2.03} />
        <mesh name="tree" geometry={nodes.tree.geometry} material={materials.baked_tree} position={[-27.98, 0, 27.69]} rotation={[-Math.PI, 1.32, -Math.PI]} scale={2.03} />
        <mesh name="rocks" geometry={nodes.rocks.geometry} material={materials.baked_rocks} position={[-27.98, 0, 27.69]} rotation={[-Math.PI, 1.32, -Math.PI]} scale={2.03} />
        <mesh name="merged_gate056" geometry={nodes.merged_gate056.geometry} material={materials['final_C.005']} position={[-18.94, 0.08, 22.41]} rotation={[3.1, -1.11, 3.07]} scale={0.48} />
        <mesh name="merged_gate057" geometry={nodes.merged_gate057.geometry} material={materials['final_C.005']} position={[-20.03, 0.08, 23.27]} rotation={[3.1, -1.07, 3.07]} scale={0.48} />
        <mesh name="merged_gate058" geometry={nodes.merged_gate058.geometry} material={materials['final_C.005']} position={[-21.21, 0.08, 23.87]} rotation={[3.11, -0.86, 3.08]} scale={0.48} />
        <mesh name="merged_gate059" geometry={nodes.merged_gate059.geometry} material={materials['final_C.005']} position={[-22.5, 0.08, 24.36]} rotation={[3.11, -0.83, 3.08]} scale={0.48} />
        <mesh name="merged_gate060" geometry={nodes.merged_gate060.geometry} material={materials['final_C.005']} position={[-23.86, 0.08, 24.91]} rotation={[3.11, -0.83, 3.08]} scale={0.48} />
        <mesh name="merged_gate061" geometry={nodes.merged_gate061.geometry} material={materials['final_C.005']} position={[-25.08, 0.08, 25.54]} rotation={[3.11, -0.83, 3.08]} scale={0.48} />
        <mesh name="merged_gate049" geometry={nodes.merged_gate049.geometry} material={materials['final_C.005']} position={[-50.93, -13.96, 9.23]} rotation={[3.11, 0.75, 3.13]} scale={0.7} />
        <mesh name="merged_gate050" geometry={nodes.merged_gate050.geometry} material={materials['final_C.005']} position={[-49.81, -13.96, 10.67]} rotation={[3.12, 0.52, 3.12]} scale={0.7} />
        <mesh name="merged_gate051" geometry={nodes.merged_gate051.geometry} material={materials['final_C.005']} position={[-48.8, -13.96, 12.07]} rotation={[3.12, 0.46, 3.12]} scale={0.7} />
        <mesh name="merged_gate052" geometry={nodes.merged_gate052.geometry} material={materials['final_C.005']} position={[-46.1, -13.96, 14.29]} rotation={[3.12, 0.39, 3.12]} scale={0.7} />
        <mesh name="merged_gate053" geometry={nodes.merged_gate053.geometry} material={materials['final_C.005']} position={[-47.51, -13.96, 13.14]} rotation={[3.12, 0.46, 3.12]} scale={0.7} />
      </group>
    </group>
  )
}

useGLTF.preload('../models/PaffDAO.glb')
