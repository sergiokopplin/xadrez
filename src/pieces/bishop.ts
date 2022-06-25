import { Square } from '../board/board'
import { getPositionAxis } from '../utils'
import { Piece } from './piece'
import { isDiagonalMove, isMoreThanSingleSquare } from './validations'

export class Bishop implements Piece {
  hasBlockPiece (current: string, next: string, board: Square[]): boolean {
    const [cy, cx] = getPositionAxis(current)
    const [ny, nx] = getPositionAxis(next)

    if (!isMoreThanSingleSquare(current, next)) {
      return false
    }

    if (cy < ny) {
      for (let index = cy + 1; index < ny; index++) {
        if (board[index][index]) {
          return false
        }
      }
    } else if (cy > ny) {
      for (let index = cy - 1; index > ny; index--) {
        if (board[index][index]) {
          return false
        }
      }
    }
  }

  move (current: string, next: string): boolean {
    if (isDiagonalMove(current, next)) return true

    return false
  }
}
