import { Position, Square } from '../utils'

export interface Piece {
  move (current: Position, next: Position, board: Square[][]): boolean
}
