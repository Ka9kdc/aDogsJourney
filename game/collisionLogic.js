
import {dog, dogMovement} from './dog'
import { addMoreiceBurgs } from './iceBurg';

const scoreBoard = document.getElementById('score')
let score = 0
export let iceBurgHit;

//iceBurgs have a radius of .1

export const iceBurgCollision = (iceBurg) => {
    const xPosition = iceBurg.position.x - dog.scene.position.x
    const zPosition = iceBurg.position.z - dog.scene.position.z
    if(xPosition < .8 && xPosition > -.8 && zPosition < .8 && zPosition > -.8){
       //colided
        dog.movement.isWalking= false
        dog.movement.isJumping= false
        dog.movement.hasDied= true
        dog.movement.isTurningRight= false
        dog.movement.isTurningLeft= false
        dogMovement()
        iceBurgHit = iceBurg
        score -= 10
        scoreBoard.innerText = score
   } 
  
}

export const boneCollision = (bone) => {
    const xPosition = bone.position.x - dog.scene.position.x
    const zPosition = bone.position.z - dog.scene.position.z
    if(xPosition < .4 && xPosition > -.4 && zPosition < .4 && zPosition > -.4){
        bone.position.x = Math.random() *20 -10
        bone.position.y = Math.random() + .5
        bone.position.z = Math.random() *20 -10
        bone.rotation.x = Math.PI / Math.random()*10
        score += 20
        scoreBoard.innerText = score
        if(score > 100 && score%100 < 2){
            addMoreiceBurgs()
        }
    }
   
}

export const resetScore = () => {
    score = 0
    scoreBoard.innerText = score
}