import { scene } from "."
import {dog} from './dog'
import {boneCollision} from './collisionLogic'



export const Allbones = []

export const makeBones = (gltf) => {
    const dogbone = gltf.scene
    while(Allbones.length < 20){
        const currentBone = dogbone.clone()
        currentBone.position.x = Math.random() *20 -10
        currentBone.position.y = Math.random() 
        currentBone.position.z = Math.random() *20 -10
        currentBone.rotation.x = Math.PI / Math.random()*10
        Allbones.push(currentBone)
        scene.add(currentBone)
    }
}



