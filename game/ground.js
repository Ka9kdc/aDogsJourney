import { GridHelper, PlaneGeometry, MeshStandardMaterial, Mesh } from "three"
import { scene } from "."


export const makeGround = () => {
 const size = 20
 const division = 20
 const groundGeo = new PlaneGeometry(size,division,size,division)
 const groundMaterial = new MeshStandardMaterial({color: 0xA5F2F3}) //0xdff7fa great color for snow
 const ground = new Mesh(groundGeo, groundMaterial)
 ground.rotation.x = -Math.PI/2

 scene.add(ground)
//  const gridHelper = new GridHelper(size, division)0xc2e0f9

//  scene.add(gridHelper)



}