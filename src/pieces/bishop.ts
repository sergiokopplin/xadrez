import { Board, Square } from '../board/board'
import { Piece } from './piece'
import { hasBlockPieceOnDiagonal, isDiagonalMove } from './validations'

export const makeBoard = (): Board => {
  return new Board()
}

export class Bishop implements Piece {
  move (current: string, next: string, board: Square[]): boolean {
    if (!isDiagonalMove(current, next)) return false

    return !(hasBlockPieceOnDiagonal(current, next, board))
  }
}
