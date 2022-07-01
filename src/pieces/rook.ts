import { Square } from '../board/board'
import { Position } from '../utils'
import { Piece } from './piece'
import { hasHorizontalBlockPiece, hasVerticalBlockPiece, isHorizontalMove, isVerticalMove } from './validations'

export class Rook implements Piece {
  move (current: Position, next: Position, board: Square[]): boolean {
    if (isVerticalMove(current, next)) return true
    if (isHorizontalMove(current, next)) return true
    if (hasVerticalBlockPiece(current, next, board)) return false

    return !(hasHorizontalBlockPiece(current, next, board))
  }
}
