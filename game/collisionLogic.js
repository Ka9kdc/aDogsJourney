import { camera, theta } from '.'
import {dog, dogMovement} from './dog'

const scoreBoard = document.getElementById('score')
let score = 0
export let treeHit;
//treeTrunks have a radius of .1

export const treeCollision = (tree) => {
    const xPosition = tree.position.x - dog.scene.position.x
    const zPosition = tree.position.z - dog.scene.position.z
    if(xPosition < .4 && xPosition > -.4 && zPosition < .4 && zPosition > -.4){
       //colided
       dog.movement.isWalking= false
        dog.movement.isJumping= false
        dog.movement.hasDied= true
        dog.movement.isTurningRight= false
        dog.movement.isTurningLeft= false
        dogMovement()
        treeHit = tree
        score -= 10
        scoreBoard.innerText = score
   } 
  
}

export const boneCollision = (bone) => {
    const xPosition = bone.position.x - dog.scene.position.x
    const zPosition = bone.position.z - dog.scene.position.z
    if(xPosition < .4 && xPosition > -.4 && zPosition < .4 && zPosition > -.4){
        console.log('hit') 
    bone.position.x = Math.random() *20 -10
    bone.position.y = Math.random() + .5
    bone.position.z = Math.random() *20 -10
    bone.rotation.x = Math.PI / Math.random()*10
     score += 20
    scoreBoard.innerText = score
    }
   
}