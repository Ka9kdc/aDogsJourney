import {dog, dogMovement} from './dog'


export let changeToXPosition = 180
export let changeToZPosition = 0





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
      break
  }
  dogMovement()

}


