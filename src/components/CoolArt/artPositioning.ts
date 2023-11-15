import { Tween, Easing } from '@tweenjs/tween.js'
import { Vector2 } from 'three'
import _ from 'lodash'

import { getArtTargetPosition } from './CoolArtTarget'


// the default position if off screen
const DEFAULT_TARET_BOX_POSITION = { left: 800, top: -600, width: 0, height: 0 }

// state
let prevTargetBoxPos = DEFAULT_TARET_BOX_POSITION
const prevCanvasSize = new Vector2()

/**
 * Mutates object's position to be at the center of the `CoolArtTarget` container.
 * It is stateful and only updates the object if the container or the canvas have changed since the last execution.
 * */
export const followArtTargetPosition = (renderer: THREE.WebGLRenderer, object: THREE.Object3D) => {
  // get current parameters
  const newTargetBoxPos = getArtTargetPosition(renderer.domElement.getBoundingClientRect()) ?? DEFAULT_TARET_BOX_POSITION
  const canvasSize = new Vector2()
  renderer.getSize(canvasSize)

  // check if parameters changed since last execution
  if (_.isEqual(newTargetBoxPos, prevTargetBoxPos) && canvasSize.equals(prevCanvasSize)) return

  // some of the parameters have changed => update the object position
  prevTargetBoxPos = newTargetBoxPos
  prevCanvasSize.set(canvasSize.x, canvasSize.y)

  const { left, top, width, height } = newTargetBoxPos
  const SCALE = 0.009 // TODO use a raycaster to actually move the object precisely to the desired position

  new Tween({ x: object.position.x, y: object.position.y })
    .to({
      x: (left + width / 2 - canvasSize.x / 2) * SCALE,
      y: -(top + height / 2 - canvasSize.y / 2) * SCALE,
    }, 1000)
    .easing(Easing.Cubic.Out)
    .onUpdate(({ x, y}) => {
      object.position.setX(x)
      object.position.setY(y)
    })
    .start()
}
