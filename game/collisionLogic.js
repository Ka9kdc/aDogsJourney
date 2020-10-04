import {dog, dogMovement} from './dog'

const scoreBoard = document.getElementById('score')
let score = 0

//treeTrunks have a radius of .1

export const treeCollision = (tree) => {
   if(tree.position.x < 0.3 && tree.position.x > -0.3  ){
       //colided
       dog.movement.isWalking= false
 dog.movement.isJumping= false
 dog.movement.hasDied= true
 dog.movement.isTurningRight= false
 dog.movement.isTurningLeft= false
 dogMovement()
 tree.position.z = 0
 tree.position.y = 1
    tree.position.x = Math.random() * 20 -10
     score -= 10
   scoreBoard.innerText = score
   } 
  
}

export const boneCollision = (bone) => {
    if(bone.position.x < .4 && bone.position.x > -.4){
        console.log('hit') 
    bone.position.x = Math.random() *20 -10
    bone.position.y = Math.random() + .5
    bone.position.z = 0
    bone.rotation.x = Math.PI / Math.random()*10
     score += 20
    scoreBoard.innerText = score
    }
   
}