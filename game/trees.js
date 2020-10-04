import { ConeGeometry, CylinderGeometry, Mesh, MeshStandardMaterial, Object3D } from 'three'
import {scene} from './index'

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
    for(let i = 0; i < 10; i++){
        const newTree = makeATree()
        newTree.position.z = Math.random()
        if(i%2) {
            newTree.position.x = Math.random()*10
        } else {
            newTree.position.x = Math.random()*-10
        }
        worldTrees.push(newTree)
        scene.add(newTree)
    }
    console.log(worldTrees)
}


// const moveTrees(){

// }

