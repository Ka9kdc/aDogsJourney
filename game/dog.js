import { mixers, scene} from './index'
import {AnimationMixer, LoopOnce, MathUtils} from 'three'
import {changeToXPosition, changeToZPosition} from './helperFunction'
import { worldiceBurgs } from './iceBurg';
import { boneCollision, iceBurgCollision, iceBurgHit } from './collisionLogic';
import {Allbones} from './index'

//dog.scenehas 4 actions 1:jump, 2:walk; 3:walkslow 4: die

let counter = 0
export let dog; 
export function prepDog(gltf) {
   dog = gltf

  const dogAnimations = {}
  gltf.animations.forEach((clip) => {
    dogAnimations[clip.name] = clip
  })
  dog.scene.animations = dogAnimations
  
  dog.scene.scale.multiplyScalar(1/3)

  const mixer = new AnimationMixer(dog.scene)
  const actions = Object.values(dog.scene.animations).map((clip) => {
    const action = mixer.clipAction(clip)
    action.enabled = false
    return action
  })

  actions[2].setLoop(LoopOnce, 1)
  actions[0].setLoop(LoopOnce, 1)

  const mixerInfo = {
    mixer,
    actions,
    actionNdx: 0,
  }

  mixers.push(mixerInfo)
  dog.movement = {
    isWalking: false,
    isJumping: false,
    hasDied: false,
    isTurningRight: false,
    isTurningLeft: false,
  }
  scene.add(dog.scene)
}

export const dogMovement = () => {
  const actions = dog.movement
  mixers[0].actions.forEach(action => {
    action.enabled = false
  })
  if(actions.isWalking){
    mixers[0].actions[4].enabled = true
  } else if(actions.isJumping){
    mixers[0].actions[2].enabled = true
    
    mixers[0].mixer.addEventListener( 'finished', function() {
      if(actions.isWalking === 0) {
        actions.isWalking = true
      }
      actions.isJumping = false
      dog.scene.position.y = 0
      dogMovement()
    } ); 
  } else if(actions.hasDied){
    mixers[0].actions[0].enabled = true
    
    mixers[0].mixer.addEventListener( 'finished', function() {
      iceBurgHit.position.z = Math.random() * 20 -10
      iceBurgHit.position.x = Math.random() * 20 -10
    })
  } else {
    mixers[0].actions[1].enabled = true
  }
  mixers[0].actions.forEach(action => {
    if (action.enabled) {
      action.play()
    } else {
      action.stop()
    }
  })
}

export const moveDog = () =>{ //dog jumpping hieght motion
  if(counter < 40){
    dog.scene.position.y += .01
  }else if (counter === 84) { //max height reached is y = .42
    counter = -1
  } else {
    dog.scene.position.y -= .01
  }
  counter++
}

export const positionChange = () => { //dog movement over ground
  const xInbounds = dog.scene.position.x < 10 && dog.scene.position.x > -10 
  const zInBounds = dog.scene.position.z < 10 && dog.scene.position.z > -10
  if(xInbounds && zInBounds){
    dog.scene.position.x -= Math.sin(MathUtils.degToRad(changeToXPosition)) /100
    dog.scene.position.z -= Math.cos(MathUtils.degToRad(changeToZPosition)) /100
  } else if(xInbounds){
    dog.scene.position.x -= Math.sin(MathUtils.degToRad(changeToXPosition)) /100
  } else if(zInBounds){
     dog.scene.position.z -= Math.cos(MathUtils.degToRad(changeToZPosition)) /100
  } else {
   dog.scene.position.x = 0
   dog.scene.position.z = 0
  }
  worldiceBurgs.forEach(iceBurg => iceBurgCollision(iceBurg))
  Allbones.forEach(bone => boneCollision(bone))
}