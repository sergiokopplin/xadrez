import { Position } from '../utils'
import { Piece } from './piece'
import { isYAxisMove, isXAxisMove, isDiagonalMove, isMoreThanSingleSquare } from './validations'

export class Pawn implements Piece {
  move (current: Position, next: Position): boolean {
    if (isMoreThanSingleSquare(current, next)) return false
    if (isYAxisMove(current, next)) return true
    if (isXAxisMove(current, next)) return true

    return !!(isDiagonalMove(current, next))
  }
}
