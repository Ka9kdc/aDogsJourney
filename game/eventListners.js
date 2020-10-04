import {camera, renderer, init} from './index'
import {checkKey, onMouseClick} from './helperFunction'

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})

window.addEventListener('keydown', checkKey)
// window.addEventListener('click', onMouseClick)
document.getElementById('reset').addEventListener('click', () => {
  console.log('hello')
  init()
})

