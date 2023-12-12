import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'

import { getTileMatrix, updateTileMatrix } from './tileMatrix'
import { distancePointToLine } from './animationUtils'
import { followArtTargetPosition } from './artPositioning'



/** Initialization */
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
camera.position.z = 10

const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(800, 1000)

const clock = new THREE.Clock()


/** Exported API */
export const getRendererDomElement = () => renderer.domElement

export const updateRendererSize = (...args: Parameters<typeof renderer.setSize>) => {
  renderer.setSize(...args)
  camera.aspect = args[0] / args[1]
  camera.updateProjectionMatrix()
}


/** Set up the scene */

// Ligths
const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
directionalLight.target.position.set(0, 0, -0.5)
scene.add(directionalLight)
scene.add(directionalLight.target)

const ambientLight = new THREE.AmbientLight(0xfffff, 0.1)
scene.add(ambientLight)

// Objects
const MATRIX_ROTATION_X = -Math.PI/10
const MATRIX_ROTATION_Y = -Math.PI/10
const MATRIX_ROTATION_Z = -Math.PI/40
const tileMatrix = getTileMatrix(8, 8, 0.4, 0.2)
tileMatrix.position.set(0, 5, 0)
tileMatrix.rotation.x = MATRIX_ROTATION_X
tileMatrix.rotation.y = MATRIX_ROTATION_Y
tileMatrix.rotation.z = MATRIX_ROTATION_Z
scene.add(tileMatrix)


/** Animate */

// Animation loop state
const pointer = new THREE.Vector2() // position of the pointer in normalized coordinates
/** Calculate pointer position in normalized device coordinates ((-1 to +1) for both components) */
const onPointerMove = (event: PointerEvent) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1
  pointer.y = (-(event.clientY + window.scrollY) / window.innerHeight) * 2 + 1
}
window.addEventListener('pointermove', onPointerMove)

const pointerRaycaster = new THREE.Raycaster() // actual pointer position ray
const floatyPointer = new THREE.Vector2() // position that slowly chases the real pointer
const floatyRaycaster = new THREE.Raycaster() // ray slowly chasing the actual pointer ray
let floatyDistance = 0 // variable that slowly chases the distance of the real pointer ray from the matrix
const FLOATINESS_C = 0.24
const FLOATINESS_THRESHOLD = 10 // at this distance from the matrix start throtlling down the hover effects

/** Incrementally update the floatyPointer position.
 * As the pointer moves away from the matrix (past the FLOATINESS_THRESHOLD) the update increments
 * become extremely small resulting in a near-still pointer. */
const updateFloatyPointer = (timeDelta: number) => {
  const distance = distancePointToLine(tileMatrix.position, camera.position, pointerRaycaster.ray.direction)
  const floatiness = timeDelta / FLOATINESS_C
  floatyDistance += (distance - floatyDistance) * floatiness // indenpendent of the floatyRaycaster
  // using `floatyDistance` results in a smoother stopping of the floatyPointer and
  // therefore the matrix movement stops smoothly as well
  const incrementMultiplier = floatyDistance < FLOATINESS_THRESHOLD
    ? floatiness // should be framerate dependant
    : floatiness / ((floatyDistance - FLOATINESS_THRESHOLD) / 8 + 1)**4
  
  floatyPointer.x += (pointer.x - floatyPointer.x) * incrementMultiplier
  floatyPointer.y += (pointer.y - floatyPointer.y) * incrementMultiplier
}

// Animation loop
const animate = (t?: number) => {
  TWEEN.update(t)
  requestAnimationFrame(animate)
  const timeDelta = clock.getDelta()
  
  followArtTargetPosition(renderer, tileMatrix)

  updateFloatyPointer(timeDelta)

  // update the raycasters with the camera and pointer positions
  pointerRaycaster.setFromCamera(pointer, camera)
  floatyRaycaster.setFromCamera(floatyPointer, camera)
  
  updateTileMatrix(tileMatrix, camera.position, floatyRaycaster.ray.direction, MATRIX_ROTATION_X, MATRIX_ROTATION_Y)

  renderer.render( scene, camera )
}

animate()
