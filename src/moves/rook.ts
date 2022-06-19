import { Position } from '../utils'
import { isXAxisMove, isYAxisMove } from './validations'

export function canRookMove (current: Position, next: Position): boolean {
  if (isYAxisMove(current, next)) return true
  if (isXAxisMove(current, next)) return true

  return false
}
