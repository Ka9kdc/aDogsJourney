import { ConeGeometry, Mesh, MeshStandardMaterial} from 'three'
import {scene} from './index'


export const worldiceBurgs = []



const makeAiceBurg = () => {
    const sides = 8; //play with this latter
    const height = Math.random()*1.5+1
    const tiers = Math.round(height+6)
    const iceBurgTopGeometry = new ConeGeometry(.5, height, sides, tiers)
    const iceBurgTopMaterial = new MeshStandardMaterial({color: 0xA5F2F3})
 //make it go in and out   
    const iceBurgTop = new Mesh(iceBurgTopGeometry, iceBurgTopMaterial)
    iceBurgTop.castShadow = true
    iceBurgTop.receiveShadow = false
    iceBurgTop.position.y = height/2
    return iceBurgTop
}



export const makeWorldiceBurgs = () =>{
    while(worldiceBurgs.length < 12){
        const newiceBurg = makeAiceBurg()
        newiceBurg.position.z =  Math.random() * 20 - 10
        newiceBurg.position.x =  Math.random() * 20 - 10
            worldiceBurgs.push(newiceBurg)
            
        
    }
    worldiceBurgs.forEach(iceBurg => scene.add(iceBurg) )
}

export const addMoreiceBurgs = () =>{
    const newiceBurg = makeAiceBurg()    
    newiceBurg.position.z = Math.random() * 20 -10
    newiceBurg.position.x = Math.random() * 20 -10
    worldiceBurgs.push(newiceBurg)
    scene.add(newiceBurg) 
    
}


 






