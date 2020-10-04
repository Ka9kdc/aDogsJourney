import { GridHelper, Plane, Vector3, PlaneHelper, PlaneGeometry, MeshStandardMaterial, Mesh } from "three"
import { scene } from "."


export const makeGround = () => {
 const size = 20
 const division = 20
//  const groundGeo = new PlaneGeometry(size,division)
//  const groundMaterial = new MeshStandardMaterial({color: 'green'})
//  const ground = new Mesh(groundGeo, groundMaterial)
//  ground.rotation.x = Math.PI/2
// console.log(ground)
//  scene.add(ground)
 const gridHelper = new GridHelper(size, division)

 scene.add(gridHelper)


// var helper = new PlaneHelper( ground, 1, 0xff0000 );
// scene.add( helper );
}