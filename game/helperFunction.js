import {mixers, renderer, scene, camera} from './index'
import {dog, dogMovement} from './dog'




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



export function onMouseClick(event){
    event.preventDefault()
    console.log('clicd')

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
      actions.isWalking= false
 actions.isJumping= false
 actions.hasDied= false
 actions.isTurningRight= false
 actions.isTurningLeft= false

      break
    case 'ArrowRight':
      if(dog.scene.rotation.y !== Math.PI-1){
        dog.scene.rotation.y -= 1
      }
      if(dog.movement.isTurningLeft){
        dog.movement.isTurningLeft = false
      } else {
        dog.movement.isTurningRight = true
      }
      break
    case 'ArrowLeft':
      if(dog.scene.rotation.y !== Math.PI+1){
        dog.scene.rotation.y += 1
      }
      
      if(dog.movement.isTurningRight){
        dog.movement.isTurningRight = false
      } else {
        dog.movement.isTurningLeft = true
      }
      break
    default:
      const mixerInfo = mixers[event.keyCode - 49]
      // console.log(mixerInfo)
      if (!mixerInfo) {
        return
      }
      
      playNextAction(mixerInfo)
  }
  dogMovement()

}


