import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    PointLight,
    Raycaster,
    Vector2,
    LoadingManager,
    AnimationMixer,
    Clock,
    Object3D,
    FogExp2,
  } from 'three'
  import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
  import './eventListners'
import { makeGround } from './ground'
  import {prepDog} from './dog'
import { setLighting } from './lighting'
import { makeWorldTrees, moveTree } from './trees'
  
  //dog.scenehas 4 actions 1:jump, 2:walk; 3:walkslow 4: die
  
  

  export const scene = new Scene()
  // scene.fog = new FogExp2(0xf0fff0, 0.14)
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
  
  

 setLighting()
 makeGround()
 makeWorldTrees()
  
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
  let isWalking = false
  let isJumping = false
  let hasDied = false
  const render = () => {
    requestAnimationFrame(render)
    if(isWalking){
      moveTree()
    }
  
    const dt = clock.getDelta()
  
    for (const {mixer} of mixers) {
      mixer.update(dt)
    }
  
    renderer.render(scene, camera)
  }
  
  render()
  