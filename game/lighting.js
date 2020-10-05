import {DirectionalLight, SpotLight, AmbientLight} from 'three'
import {scene} from './index'

export let spotlight;

export function setLighting() {
    const ambientLighting = new AmbientLight(0x666666)
    scene.add(ambientLighting)
    const directionlight = new DirectionalLight(0xdfebff, 1)
    directionlight.position.set(50,200,100)
    directionlight.castShadow = true
    scene.add(directionlight)
}