import {camera, renderer, init} from './index'
import {checkKey} from './helperFunction'

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})

window.addEventListener('keydown', checkKey)

document.getElementById('reset').addEventListener('click', () => {
  init()
})

export const startPage = document.getElementById('title')
startPage.addEventListener('click', () => {
  document.getElementById('app').removeChild(startPage)
  init()
})

document.getElementById('End').addEventListener('click', () => {
  document.getElementById('app').replaceChild(startPage, renderer.domElement)
})