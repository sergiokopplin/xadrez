import { Square } from '../board/board'
import { Position } from '../utils'
import { Piece } from './piece'
import { hasDiagonalBlockPiece, hasHorizontalBlockPiece, hasVerticalBlockPiece, isDiagonalMove, isHorizontalMove, isVerticalMove } from './validations'

export class Queen implements Piece {
  move (current: Position, next: Position, board: Square[]): boolean {
    if (isVerticalMove(current, next)) return true
    if (isHorizontalMove(current, next)) return true
    if (isDiagonalMove(current, next)) return true
    if (hasDiagonalBlockPiece(current, next, board)) return false
    if (hasVerticalBlockPiece(current, next, board)) return false

    return !(hasHorizontalBlockPiece(current, next, board))
  }
}
