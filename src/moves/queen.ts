import { Position } from '../utils'
import { isDiagonalMove, isXAxisMove, isYAxisMove } from './validations'

export function canQueenMove (current: Position, next: Position): boolean {
  if (isYAxisMove(current, next)) return true
  if (isXAxisMove(current, next)) return true
  if (isDiagonalMove(current, next)) return true

  return false
}
