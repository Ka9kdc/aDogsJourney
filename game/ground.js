import { GridHelper, Plane, Vector3, PlaneHelper } from "three"
import { scene } from "."


export const makeGround = () => {
 const size = 20
 const division = 20
//  const ground = new Plane(new Vector3( 10, 10, 2 ), 3, 0x0000ff)
// console.log(ground)
//  scene.add(ground)
 const gridHelper = new GridHelper(size, division)
 gridHelper.rotation.x = Math.PI / 10
 console.log(gridHelper)
 scene.add(gridHelper)


// var helper = new PlaneHelper( ground, 1, 0xff0000 );
// scene.add( helper );
}