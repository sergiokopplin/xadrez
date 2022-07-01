import { Position } from '../utils'
import { Piece } from './piece'
import { isVerticalMove, isHorizontalMove, isDiagonalMove, isMoreThanSingleSquare } from './validations'

export class Pawn implements Piece {
  move (current: Position, next: Position): boolean {
    if (isMoreThanSingleSquare(current, next)) return false
    if (isHorizontalMove(current, next)) return false
    if (isVerticalMove(current, next)) return true

    return !!(isDiagonalMove(current, next))
  }
}
