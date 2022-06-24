import { Position } from '../utils'

export interface Piece {
  move (current: Position, next: Position): boolean
}
