import React, { useRef } from 'react';
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from "three/examples/jsm/libs/stats.module";
import Overlay from '../components/overlay';


if (window.location.pathname === '/dao') {

  var activeCamera;
  const scene = new THREE.Scene();
  var model;
  const gridHelper = new THREE.GridHelper(250, 50, 0xaec6cf, 0xaec6cf);
  scene.add(gridHelper);
  
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // const camerahelper = new THREE.PerspectiveCamera(
  //   75,
  //   window.innerWidth / window.innerHeight,
  //   0.1,
  //   1000
  // );
  
  // camerahelper.position.set(0,20,-50);
  
  
  
  const ambLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambLight);
  
  const loader = new GLTFLoader();

  const paffModel = loader.load(
    "/models/PaffDAO.glb",
    function (gltf){
      model = gltf.scene;
      scene.add(model);
      scene.scale.set(0.25,0.25,0.25);
      model.wireframe = true;
    },
  )
  

  
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  renderer.domElement.style.position = 'fixed';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.zIndex = '99';

  camera.position.x = -5;
  camera.position.y = 1;
  camera.lookAt(0,0,0);
  
  
  

  

  // const geometry = new THREE.BoxGeometry();
  // const material = new THREE.MeshBasicMaterial({
    //   color: 0xff0000,
    //   wireframe: true
  // });
  
  // const cube = new THREE.Mesh(geometry, material);
  // cube.position.set(0, 0.5, -10);
  // scene.add(cube);

  
  
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
  // animationScripts.push({
  //   start: 0,
  //   end: 101,
  //   func: () => {
  //     let r = material.color.r
  //     r -= 0.05
  //     if (r <= 0) {
  //       r = 1.0
  //     }
  //     material.color.r = r
  //   }
  // })
  
  
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

  // const helper = new THREE.CameraHelper( camera );
  // scene.add(helper);

  // const oc = new OrbitControls ( camerahelper , renderer.domElement );

  
  
  function animate() {
    requestAnimationFrame(animate)
  
    playScrollAnimations()
  
    render()
  
    stats.update()
  }
  
  function render() {
    renderer.render(scene, camera)
    // oc.update();
  
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