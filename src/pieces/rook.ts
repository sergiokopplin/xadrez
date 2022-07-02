import { Position, Square } from '../utils'
import { Piece } from './piece'
import { hasHorizontalBlockPiece, hasVerticalBlockPiece, isHorizontalMove, isVerticalMove } from './validations'

export class Rook implements Piece {
  move (current: Position, next: Position, board: Square[][]): boolean {
    if (
      hasVerticalBlockPiece(current, next, board) ||
      hasHorizontalBlockPiece(current, next, board)
    ) return false

    if (isVerticalMove(current, next)) return true

    return isHorizontalMove(current, next)
  }
}
