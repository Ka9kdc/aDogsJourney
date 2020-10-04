import {mixers, renderer, scene, camera} from './index'
import {AnimationMixer} from 'three'

export const playNextAction = (mixerInfo) => {
  const {actions, actionNdx} = mixerInfo
  const nextActionNdx = (actionNdx + 1) % actions.length
  mixerInfo.actionNdx = nextActionNdx
  console.log(actions)
  actions.forEach((action, ndx) => {
    const enabled = ndx === nextActionNdx
    action.enabled = enabled //enabled = playing
    if (enabled) {
      action.play()
    }
  })
}

let dog; 
export function prepDog(gltf) {
   dog = gltf

  const dogAnimations = {}
  gltf.animations.forEach((clip) => {
    dogAnimations[clip.name] = clip
  })
  dog.scene.animations = dogAnimations
  dog.scene.rotation.y = 1
console.log(dog)
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

export function onMouseClick(event){
    event.preventDefault()
    console.log('clicked')

// actions[0].play()
// dog.animations.death.play()
    // mouse.x = (event.clientX / window.innerWidth) * 2 -1;
    // mouse.y = - (event.clientY / window.innerHeight) *2 +1;

    // raycaster.setFromCamera(mouse, camera)

    // const intersects =  raycaster.intersectObjects(scene.children, true) //returns an array
    // console.log(intersects)
    // for(let i = 0; i < intersects.length; i++){
    //     console.log(intersects[i].object)
    //     intersects[i].object.position.x = Math.random() * 10

    }
// // }

export function checkKey(event) {
  //rotation x is head to tail
  //rotation y is left and right
  //rotaion x clock
  switch (event.key) {
    case 'ArrowUp':
      dog.scene.rotation.y += 1
      break
    case 'ArrowDown':
      dog.scene.rotation.y -= 1
      break
    case 'ArrowRight':
      dog.scene.position.y += 1
      break
    case 'ArrowLeft':
      dog.scene.position.y -= 1
      break
    default:
      const mixerInfo = mixers[event.keyCode - 49]
      // console.log(mixerInfo)
      if (!mixerInfo) {
        return
      }
      playNextAction(mixerInfo)
  }

  renderer.render(scene, camera)
}


