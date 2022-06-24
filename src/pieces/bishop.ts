import { Position } from '../utils'
import { isDiagonalMove } from './validations'

export function canBishopMove (current: Position, next: Position): boolean {
  if (isDiagonalMove(current, next)) return true

  return false
}
