import { Piece } from './piece'
import { isDiagonalMove } from './validations'

export class Bishop implements Piece {
  move (current: string, next: string): boolean {
    if (isDiagonalMove(current, next)) return true

    return false
  }
}
