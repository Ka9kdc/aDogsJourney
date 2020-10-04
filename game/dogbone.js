import { scene } from "."
import {dog} from './dog'
import {boneCollision} from './collisionLogic'



const Allbones = []

export const makeBones = (gltf) => {
    const dogbone = gltf.scene
    while(Allbones.length < 20){
        const currentBone = dogbone.clone()
        currentBone.position.x = Math.random() *20 -10
        currentBone.position.y = Math.random() + .5
        currentBone.rotation.x = Math.PI / Math.random()*10
        Allbones.push(currentBone)
        scene.add(currentBone)
    }
    console.log(Allbones)
}

const turning = ()=> {
    if(dog.movement.isTurningRight){
        Allbones.forEach(bone => {
            if(bone.position.z){
                bone.position.x -= .01 
            }else {
              bone.position.x -= .001  
            }
            
            if(bone.position.x > 10){
                bone.position.x -= 25
            } 
        })
    }   else if(dog.movement.isTurningLeft){
        Allbones.forEach(bone => {
            if(bone.position.z){
                bone.position.x += .01 
            }else {
                bone.position.x += .001
            }
            if(bone.position.x < -10){
                bone.position.x += 25
            } 
        })
    }
}

export const moveBones = () => {

    Allbones.forEach(currentBone => {
        if(currentBone.position.y > 0.5) {
        currentBone.position.y -= .001
    } else {
        currentBone.position.z += .01
    } 
    if(currentBone.position.z > 3){
        currentBone.position.z = 0
        currentBone.position.y = 1.5
        currentBone.position.x = Math.random() *20 -10
        currentBone.rotation.x = Math.PI / Math.random()*10
    } else if(currentBone.position.z < .2 && currentBone.position.y < .5){
         boneCollision(currentBone)
    }
    })
    turning()
 
   
}
