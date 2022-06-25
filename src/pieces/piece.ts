import { Position } from '../utils'
import { Square } from '../board/board'

export interface Piece {
  move (current: Position, next: Position): boolean
  hasBlockPiece (current: Position, next: Position, board: Square[]): boolean
}
