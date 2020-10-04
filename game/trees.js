import { ConeGeometry, CylinderGeometry, Mesh, MeshStandardMaterial, Object3D } from 'three'
import {scene} from './index'
import {dog} from './dog'
import { treeCollision } from './collisionLogic'

const worldTrees = []



const makeTreeTop = () => {
    const sides = 8; //play with this latter
    const height = Math.random()*1.5+1
    const tiers = Math.round(height+6)
    const treeTopGeometry = new ConeGeometry(.5, height, sides, tiers)
    const treeTopMaterial = new MeshStandardMaterial({color: 0x00ff00})
 //make it go in and out   
    const treeTop = new Mesh(treeTopGeometry, treeTopMaterial)
    treeTop.castShadow = true
    treeTop.receiveShadow = false
    treeTop.position.y = 0.9+(height/2)
    return treeTop
}

const makeATree = () => {
//trunk is a cylinder
const treeTop = makeTreeTop()

const treeTrunkGeometry = new CylinderGeometry(.1, .1, 1) //small trunks
const treeTrunkMaterial = new MeshStandardMaterial({color:  'brown'})
const treeTrunk = new Mesh(treeTrunkGeometry, treeTrunkMaterial)
treeTrunk.position.y = 0.5

const tree = new Object3D()
tree.add(treeTrunk)
tree.add(treeTop)

return tree
}

export const makeWorldTrees = () =>{
    while(worldTrees.length < 12){
        const newTree = makeATree()
        // newTree.position.z = 0
        // newTree.position.y = 1

        //z = 3 and y = 0 tree very close
        //z = 4 & y = 0 under tree
        //z=0 & y = .5 on horizon
      

        let offset =  Math.random()
        if(!(worldTrees.length%3)){
            // newTree.position.y = offset*-1
             newTree.position.z = offset * 4
        } else {
            newTree.position.y = offset
        }
        if(worldTrees.length%2) {
            newTree.position.x = offset*10
            
        } else {
            newTree.position.x = offset*-10
        }
        if(newTree.position.x > .5  || newTree.position.x < -.5){
            worldTrees.push(newTree)
            scene.add(newTree) 
        }
    }
}

// export const addMoreTrees = () =>{
//     const newTree = makeATree()    
//     newTree.position.y = 1
//     newTree.position.x = Math.random() * 20 -10
//     console.log(newTree.position.x)
//     if(newTree.position.x > .5  || newTree.position.x < -.5){
//         worldTrees.push(newTree)
//         scene.add(newTree) 
//     }
// }


 const turning = ()=> {
    if(dog.movement.isTurningRight){
        worldTrees.forEach(tree => {
            if(tree.position.z){
                tree.position.x -= .01 
            }else {
              tree.position.x -= .001  
            }
            
            if(tree.position.x > 10){
                tree.position.x -= 25
            } 
        })
    }
    else if(dog.movement.isTurningLeft){
        worldTrees.forEach(tree => {
            if(tree.position.z){
                tree.position.x += .01 
            }else {
                tree.position.x += .001
            }
            if(tree.position.x < -10){
                tree.position.x += 25
            } 
        })
    }
}

export const moveTree = () => {

    worldTrees.forEach(currentTree => {
        if(currentTree.position.y > 0) {
        currentTree.position.y -= .001
    } else {
        currentTree.position.z += .01
    } 
    if(currentTree.position.z > 3){
        currentTree.position.z = 0
        currentTree.position.y = 1
        console.log(currentTree.position.x)
        currentTree.position.x = Math.random() *10 -5
    } else if(currentTree.position.z < .2 && currentTree.position.y < .2){
         treeCollision(currentTree)
    }
   

    })
    turning()
 
   
}




