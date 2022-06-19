import { getPositionAxis, Position } from '../utils'

export function canQueenMove (current: Position, next: Position): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (cy === ny) {
    return true
  }

  if (cx === nx) {
    return true
  }

  if (Math.abs(cy - cx) === Math.abs(ny - nx)) {
    return true
  }

  return false
}
