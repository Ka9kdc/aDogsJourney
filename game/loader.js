import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {makeBones} from './dogbone'
import {prepDog} from './dog'

const loader = new GLTFLoader()
export const loadModels =() => {
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

  loader.load('/DogBone.glb', 
    function(glft){ 
      makeBones(glft)
    }, 
    undefined,
    function (error) {
      console.error(error)
    })
}
  