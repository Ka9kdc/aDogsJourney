import {camera, renderer} from './index'
import {checkKey, onMouseClick} from './helperFunction'

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})

window.addEventListener('keydown', checkKey)
window.addEventListener('click', onMouseClick)
