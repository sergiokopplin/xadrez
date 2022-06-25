import { Square } from '../board/board'
import { Position } from '../utils'
import { Piece } from './piece'
import { hasBlockPieceOnXAxis, hasBlockPieceOnYAxis, isXAxisMove, isYAxisMove } from './validations'

export class Rook implements Piece {
  move (current: Position, next: Position, board: Square[]): boolean {
    if (isYAxisMove(current, next)) return true
    if (isXAxisMove(current, next)) return true
    if (hasBlockPieceOnYAxis(current, next, board)) return false
    if (hasBlockPieceOnXAxis(current, next, board)) return false

    return false
  }
}
