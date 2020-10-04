import {HemisphereLight, DirectionalLight, SpotLight} from 'three'
import {scene} from './index'

export function setLighting() {
    // const hemisphereLight = new HemisphereLight(0x000000, 0xffffff, 9)
    // scene.add(hemisphereLight)
    let sun = new DirectionalLight(0xcdc1c5, .9)
    sun.position.set(10, 10, 5)
    sun.castShadow = true
    scene.add(sun)
    //Set up shadow properties for the sun light
    sun.shadow.mapSize.width = 256
    sun.shadow.mapSize.height = 256
    sun.shadow.camera.near = 0.5
    sun.shadow.camera.far = 50
    // const spotlight = new SpotLight(0x00ff00, 1, 1000, 25)
    // scene.add(spotlight)
  }