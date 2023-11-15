import { Vector3 } from 'three'


export const distancePointToLine = (point: Vector3, lineOrigin: Vector3, lineDirection: Vector3) => {
  const pointToLineOrigin = new Vector3().subVectors(lineOrigin, point)
  const crossProduct = new Vector3().crossVectors(lineDirection, pointToLineOrigin)
  return crossProduct.length() ** 2 / lineDirection.length() ** 2
}

export const perpendicularToLineFromPoint = (point: Vector3, lineOrigin: Vector3, lineDirection: Vector3) => {
  const pointTolineOrigin = new Vector3().subVectors(lineOrigin, point)
  const normalOfPlane = new Vector3().crossVectors(pointTolineOrigin, lineDirection)
  return new Vector3().crossVectors(pointTolineOrigin, normalOfPlane).normalize()
}

export const distanceVectorPointToLine = (point: Vector3, lineOrigin: Vector3, lineDirection: Vector3) => {
  const pointToLineOrigin = new Vector3().subVectors(lineOrigin, point)
  // normal vector, perpendicular to the plane of the problem (plane defined by the line and the point)
  const normalOfPlane = new Vector3().crossVectors(pointToLineOrigin, lineDirection)
  const direction = new Vector3().crossVectors(pointToLineOrigin, normalOfPlane)

  const crossProduct = new Vector3().crossVectors(lineDirection, pointToLineOrigin)
  const distance = crossProduct.length() ** 2 / lineDirection.length() ** 2

  return direction.setLength(distance)
}

/**
 * Exponential easing function (easing in and out) generator
 * @param aggressivness how quickly the value plateaus; (1 by default)
 * @param range returned values will be between -`range`/2 and `range`/2; (2 by default)
 */
export const getEasingFunc = (aggressivness=1, range=2) => (x: number) =>
  x < 0
    ? (Math.pow(2, aggressivness * x) * range/2 - range/2)
    : ((2 - Math.pow(2, -aggressivness * x))* range/2 - range/2)

