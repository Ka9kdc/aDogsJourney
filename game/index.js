import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Clock,
    FogExp2, MathUtils, Color
  } from 'three'
import {loadModels} from './loader'
import './eventListners'
import { makeGround } from './ground'
import {dog, positionChange} from './dog'
import { setLighting} from './lighting'
import { makeWorldiceBurgs} from './iceBurg'
import { resetScore } from './collisionLogic'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {VRButton } from "three/examples/jsm/webxr/VRButton.js"


export let scene;
export let Allbones = []

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

//adding VR
document.getElementById('vr').appendChild( VRButton.createButton( renderer ) )
renderer.xr.enabled = true;

//adding camera control
const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.enableZoom = false
  
export const mixers = [] //will be holding all the animations

let theta;

function paning() {
  theta += .1
  if (camera.position.y > .001 || camera.position.y < -.001 || camera.position.z === 5) {
    camera.position.x = 5 * Math.sin(MathUtils.degToRad(theta))
    camera.position.y = Math.sin(MathUtils.degToRad(theta))
    camera.position.z = 5 * Math.cos(MathUtils.degToRad(theta))
  } else {
    camera.position.z = 5
    if (dog) {
      dog.scene.rotation.y = Math.PI
    }
  }

}
 
const update = () => {
  const dt = clock.getDelta()
  
  if(theta< 180){ //i did nested if statements so that i only had to reset theta to start the motion again
    paning()
  } else if(theta < 184 ){
    theta +=.1
    camera.position.y += .1 
  } else if(theta < 184.1){
    orbitControls.update()
  }

     
  if(dog){
    camera.lookAt(dog.scene.position)
    if(dog.movement.isWalking || dog.movement.isJumping){
      positionChange()
    } 
  }
   
  for (const {mixer} of mixers) {
    mixer.update(dt)
    
  }
  renderer.render(scene, camera)
}


const render = () => {
  requestAnimationFrame(render)
  update()
}
  
export const init = () => {
  scene = new Scene()
  scene.fog = new FogExp2(0xf0fff0, 0.14)
  scene.background= new Color(0xa0a0a0)
  Allbones = []
  setLighting()
  makeGround()
  loadModels()
  makeWorldiceBurgs()
  resetScore()
  theta = 0
  document.getElementById('app').appendChild(renderer.domElement)
  render()
}
  

export const vrInit = () => {
  scene = new Scene()
  scene.fog = new FogExp2(0xf0fff0, 0.14)
  scene.background= new Color(0xa0a0a0)
  Allbones = []
  setLighting()
  makeGround()
  loadModels()
  makeWorldiceBurgs()
  resetScore()
  theta = 0
  document.getElementById('app').appendChild(renderer.domElement)
  renderer.setAnimationLoop(update())
}