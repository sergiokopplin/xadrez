import { Position } from '../utils'
import { Board } from '../board/board'

export interface Piece {
  move (current: Position, next: Position): boolean
  hasBlockPiece (current: Position, next: Position, board: Board): boolean
}
