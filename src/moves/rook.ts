import { getPositionAxis, Position } from '../utils'

export function canRookMove (current: Position, next: Position): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (cy === ny) {
    return true
  }

  if (cx === nx) {
    return true
  }

  return false
}
