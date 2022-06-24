import { Position, getPositionAxis } from '../utils'
import { isYAxisMove, isXAxisMove, isDiagonalMove } from './validations'

export function canHorseMove (current: Position, next: Position): boolean {
  if (isDiagonalMove(current, next)) return false
  if (isYAxisMove(current, next)) return false
  if (isXAxisMove(current, next)) return false

  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (Math.abs(cy - ny) === 1 || Math.abs(cy - ny) === 2) {
    if (Math.abs(cx - nx) === 1 || Math.abs(cx - nx) === 2) {
      return true
    }
  }

  return false
}
