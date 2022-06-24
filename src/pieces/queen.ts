import { Position } from '../utils'
import { Piece } from './piece'
import { isDiagonalMove, isXAxisMove, isYAxisMove } from './validations'

export class Queen implements Piece {
  move (current: Position, next: Position): boolean {
    if (isYAxisMove(current, next)) return true
    if (isXAxisMove(current, next)) return true
    if (isDiagonalMove(current, next)) return true

    return false
  }
}
