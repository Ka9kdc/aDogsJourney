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
 
      
        newTree.position.z =  Math.random() * 20 - 10
        newTree.position.x =  Math.random() * 20 - 10
        
        
            worldTrees.push(newTree)
            scene.add(newTree) 
        
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


 






