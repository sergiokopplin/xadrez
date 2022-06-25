import { Board } from '../board/board'
import { Piece } from './piece'
import { isDiagonalMove, isMoreThanSingleSquare } from './validations'

export class Bishop implements Piece {
  hasBlockPiece (current: string, next: string, board: Board): boolean {
    if (!isMoreThanSingleSquare(current, next)) {
      return false
    }

    return true
  }

  move (current: string, next: string): boolean {
    if (isDiagonalMove(current, next)) return true

    return false
  }
}
