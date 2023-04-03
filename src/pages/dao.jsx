import React, { useRef } from 'react';
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Stats from "three/examples/jsm/libs/stats.module";
import Overlay from '../components/overlay';


if (window.location.pathname === '/dao') {
  const scene = new THREE.Scene();
  
  const gridHelper = new THREE.GridHelper(250, 50, 0xaec6cf, 0xaec6cf);
  scene.add(gridHelper);
  
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const ambLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambLight);
  
  const loader = new GLTFLoader();

  loader.load(
    "/models/PaffDAO.glb",
    function (gltf){
      scene.add(gltf.scene)
    },
  )
  

  
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  renderer.domElement.style.position = 'fixed';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.zIndex = '-99';
  
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
  });
  
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0.5, -10);
  scene.add(cube);

  
  
  window.addEventListener("resize", onWindowResize, false)
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
  }
  
  /* Liner Interpolation
   * lerp(min, max, ratio)
   * eg,
   * lerp(20, 60, .5)) = 40
   * lerp(-20, 60, .5)) = 20
   * lerp(20, 60, .75)) = 50
   * lerp(-20, -10, .1)) = -.19
   */
  function lerp(x, y, a) {
    return (1 - a) * x + a * y
  }
  
  // Used to fit the lerps to start and end at specific scrolling percentages
  function scalePercent(start, end) {
    return (scrollPercent - start) / (end - start)
  }
  
  const animationScripts = []
  
  //add an animation that flashes the cube through 100 percent of scroll
  animationScripts.push({
    start: 0,
    end: 101,
    func: () => {
      let r = material.color.r
      r -= 0.05
      if (r <= 0) {
        r = 1.0
      }
      material.color.r = r
    }
  })
  
  //add an animation that moves the cube through first 40 percent of scroll
  animationScripts.push({
    start: 0,
    end: 40,
    func: () => {
      camera.lookAt(cube.position)
      camera.position.set(0, 1, 2)
      cube.position.z = lerp(-10, 0, scalePercent(0, 40))
      // console.log(cube.position.z)
    }
  })
  
  //add an animation that rotates the cube between 40-60 percent of scroll
  animationScripts.push({
    start: 40,
    end: 60,
    func: () => {
      camera.lookAt(cube.position)
      camera.position.set(0, 1, 2)
      cube.rotation.z = lerp(0, Math.PI, scalePercent(40, 60))
      //console.log(cube.rotation.z)
    }
  })
  
  //add an animation that moves the camera between 60-80 percent of scroll
  animationScripts.push({
    start: 60,
    end: 80,
    func: () => {
      camera.position.x = lerp(0, 5, scalePercent(60, 80))
      camera.position.y = lerp(1, 5, scalePercent(60, 80))
      camera.lookAt(cube.position)
      //console.log(camera.position.x + " " + camera.position.y)
    }
  })
  
  //add an animation that auto rotates the cube from 80 percent of scroll
  animationScripts.push({
    start: 80,
    end: 101,
    func: () => {
      //auto rotate
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
    }
  })
  
  function playScrollAnimations() {
    animationScripts.forEach(a => {
      if (scrollPercent >= a.start && scrollPercent < a.end) {
        a.func()
      }
    })
  }
  
  let scrollPercent = 0
  
  document.body.onscroll = () => {
    //calculate the current scroll progress as a percentage
    scrollPercent =
      ((document.documentElement.scrollTop || document.body.scrollTop) /
        ((document.documentElement.scrollHeight || document.body.scrollHeight) -
          document.documentElement.clientHeight)) *
      100
    // document.getElementById("scrollProgress").innerText =
    //   "Scroll Progress : " + scrollPercent.toFixed(2)
  }
  
  const stats = new Stats()
  document.body.appendChild(stats.dom)
  
  function animate() {
    requestAnimationFrame(animate)
  
    playScrollAnimations()
  
    render()
  
    stats.update()
  }
  
  function render() {
    renderer.render(scene, camera)
  }
  
  
  window.scrollTo({ top: 0, behavior: "smooth" })
  animate()
  }else {
      console.log("not on correct page");
  }


const Dao = () => {
  return (
    <>


        {/* <Canvas className='!h-[100vh] !fixed top-0 bottom-0' >
            
            <PerspectiveCamera makeDefault position={[-60,10,5]} rotation={[.0,-7.85,-.0]} lookAt={[0,0,0]} fov={40} zoom={2} />
            <ambientLight intensity={0.8} />  
            <pointLight position={[10, 10, 10]} />
                     <PaffModel position={[5, 10, 9]} scale={0.3} rotation={[0,0,.0]} />   

        </Canvas> */}

        <Overlay/>
        
    </>
  )
}

export default Dao;