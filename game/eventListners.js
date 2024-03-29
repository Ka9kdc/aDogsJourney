import {camera, renderer, init, vrInit} from './index'
import {checkKey} from './helperFunction'


//the majority of the event listeners used

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
document.getElementById('start').addEventListener('click', () => {
  document.getElementById('app').removeChild(startPage)
  init()
})

document.getElementById('End').addEventListener('click', () => {
  document.getElementById('app').replaceChild(startPage, renderer.domElement)
})


document.getElementById('vr').addEventListener('click', () => {
  if(document.getElementById('title')){
    document.getElementById('app').removeChild(startPage)
  }
  vrInit()
})
