import { Position } from '../utils'
import { isYAxisMove, isXAxisMove, isDiagonalMove, isMoreThanSingleSquare } from './validations'

export function canPawnMove (current: Position, next: Position): boolean {
  if (isMoreThanSingleSquare(current, next)) return false
  if (isYAxisMove(current, next)) return true
  if (isXAxisMove(current, next)) return true
  if (isDiagonalMove(current, next)) return true

  return false
}
