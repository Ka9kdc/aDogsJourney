import {mixers, scene} from './index'
import {AnimationMixer} from 'three'

export let dog; 
export function prepDog(gltf) {
   dog = gltf

  const dogAnimations = {}
  gltf.animations.forEach((clip) => {
    dogAnimations[clip.name] = clip
  })
  dog.scene.animations = dogAnimations
  dog.scene.rotation.y = 2 * Math.PI 
  
  dog.scene.scale.multiplyScalar(1/15)

  dog.scene.position.z = 4

  const mixer = new AnimationMixer(dog.scene)
  const actions = Object.values(dog.scene.animations).map((clip) => {
    const action = mixer.clipAction(clip)
    action.enabled = false
    return action
  })
  const mixerInfo = {
    mixer,
    actions,
    actionNdx: 0,
  }

  mixers.push(mixerInfo)
  scene.add(dog.scene)
}