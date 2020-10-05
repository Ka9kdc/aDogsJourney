import {mixers, renderer, scene, camera} from './index'
import {dog, dogMovement} from './dog'


export let changeToXPosition = 180
export let changeToZPosition = 0


export const playNextAction = (mixerInfo) => {
  const {actions, actionNdx} = mixerInfo
  const nextActionNdx = (actionNdx + 1) % actions.length
  mixerInfo.actionNdx = nextActionNdx
  // console.log(actions)
  actions.forEach((action, ndx) => {
    const enabled = ndx === nextActionNdx
    action.enabled = enabled //enabled = playing
    if (enabled) {
      action.play()
    }
  })
}


const resetToIdle = () => {
  const actions = dog.movement
  actions.isWalking= false
  actions.isJumping= false
  actions.hasDied= false
  actions.isTurningRight= false
  actions.isTurningLeft= false
}

export function checkKey(event) {
  //rotation x is head to tail
  //rotation y is left and right
  //rotaion x clock
  const actions = dog.movement
  console.log(event.key)
  switch (event.key) {
    case ' ':
      actions.isJumping = true
      if(actions.isWalking){
        actions.isWalking = 0 //seting is walking to 0 to pause the action
      }
      break
    case 'ArrowUp':
      actions.isWalking = true
      
      break
    case 'ArrowDown':
     resetToIdle()
      break
    case 'ArrowRight':
      changeToXPosition -= 4
      changeToZPosition += 4
      dog.scene.rotation.y +=  .1
      break
    case 'ArrowLeft':
    changeToXPosition += 4
     changeToZPosition -= 4
     dog.scene.rotation.y -=  .1
      break
    default:
      const mixerInfo = mixers[event.keyCode - 49]
      if (!mixerInfo) {
        return
      }
      
      playNextAction(mixerInfo)
  }
  dogMovement()

}


