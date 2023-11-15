import { BoxGeometry, Group, Mesh, MeshPhongMaterial, Vector3 } from 'three'
import { PRIMARY_COLOR } from '../../theme'
import { distanceVectorPointToLine, getEasingFunc } from './animationUtils'


const primary = parseInt(PRIMARY_COLOR.substring(1), 16)

/** Creates a group of tiles in a matrix (in the XY plane) centered at [0; 0; 0] */
export const getTileMatrix = (columnCount: number, rowCount: number, tileSize: number, gap: number) => {
  const tiles = []
  for (let col = 0; col < columnCount; col++) {
    for (let row = 0; row < rowCount; row++) {
      const geometry = new BoxGeometry(tileSize, tileSize, tileSize * 0.2)
      const material = new MeshPhongMaterial({ color: primary })
      const mesh = new Mesh(geometry, material)
      mesh.position.set(
        (col - (columnCount -1) / 2) * tileSize * (1 + gap),
        (row - (rowCount - 1) / 2) * tileSize * (1 + gap),
        0,
      )
      tiles.push(mesh)
    }
  }
  
  const tileMatrix = new Group()
  tiles.forEach((tile) => tileMatrix.add(tile))

  return tileMatrix
}


const easing = getEasingFunc()
const zOffseetEasing = getEasingFunc(0.6, 0.8)

export const updateTileMatrix = (tileMatrix: Group, cameraPosition: Vector3, raycasterDirection: Vector3, groupRotationX=0, groupRotationY=0) => {
  const floatyDistanceVec = distanceVectorPointToLine(tileMatrix.position, cameraPosition, raycasterDirection)
  tileMatrix.rotation.x = groupRotationX + easing(floatyDistanceVec.y) * Math.PI/16
  tileMatrix.rotation.y = groupRotationY - easing(floatyDistanceVec.x) * Math.PI/8

  tileMatrix.children.forEach((child) => {
    const childAbsolutePosition = new Vector3().addVectors(child.position, tileMatrix.position) // does not account for the rotation of the group
    const childDistanceVec = distanceVectorPointToLine(childAbsolutePosition, cameraPosition, raycasterDirection)

    child.rotation.x = easing(childDistanceVec.y) * Math.PI/5
    child.rotation.y = -easing(childDistanceVec.x) * Math.PI/10
    child.position.z = zOffseetEasing(childDistanceVec.length())
  })
}
