import { Position } from '../utils'
import { Piece } from './piece'
import { isXAxisMove, isYAxisMove } from './validations'

export class Rook implements Piece {
  move (current: Position, next: Position): boolean {
    if (isYAxisMove(current, next)) return true
    if (isXAxisMove(current, next)) return true

    return false
  }
}
