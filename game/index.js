import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Clock,
    FogExp2, MathUtils
  } from 'three'
  import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
  import './eventListners'
import { makeGround } from './ground'
  import {prepDog, dog, moveDog, dogMovement} from './dog'
import { setLighting } from './lighting'
import { makeWorldTrees, moveTree } from './trees'
import { makeBones, moveBones } from './dogbone'
  
  //dog.scenehas 4 actions 1:jump, 2:walk; 3:walkslow 4: die
  
  

  export const scene = new Scene()
  scene.fog = new FogExp2(0xf0fff0, 0.14)
  export const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 5
  
  const clock = new Clock()

  
  export const renderer = new WebGLRenderer({antialias: true, alpha: true})
  renderer.setClearColor(0xfffafa, 1)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('app').appendChild(renderer.domElement)
  
  

  
  export const mixers = []
  const loader = new GLTFLoader()
  loader.load(
    '/Pug.gltf',
    function (gltf) {
      prepDog(gltf)      
    },
    undefined,
    function (error) {
      console.error(error)
    }
  )

 loader.load('/DogBone.glb', function(glft){ 
  //  makeBones(glft)
  } , undefined,
 function (error) {
   console.error(error)
 })

 let theta = 0
  const render = () => {
    requestAnimationFrame(render)
    const dt = clock.getDelta()
    
    if(theta< 180){ //i did nested if statements so that i only had to reset theta to start the motion again
      theta +=.1
      if(camera.position.y > .001 || camera.position.y < -.001 || camera.position.z === 5 ){
    camera.position.x = 5 * Math.sin(MathUtils.degToRad(theta))
    camera.position.y = Math.sin(MathUtils.degToRad(theta))
    camera.position.z = 5 * Math.cos(MathUtils.degToRad(theta))
    } else {
      console.log(camera.position)
      camera.position.z = 5
      
      dog.scene.rotation.y = Math.PI 
    }
  } else if(theta < 184 ){
    theta +=.1
    camera.position.y += .1 
  }

     
if(dog){
  camera.lookAt(dog.scene.position)
}
   
 
    
    for (const {mixer} of mixers) {
      mixer.update(dt)
      
    }
  
    renderer.render(scene, camera)
  }
  
export const init = () => {
  setLighting()
 makeGround()
//  makeWorldTrees()
  render()
}
  init()
  