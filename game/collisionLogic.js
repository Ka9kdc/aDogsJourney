import {dog, dogMovement} from './dog'


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
   } 
}