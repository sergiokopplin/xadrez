import { IBoard } from '../utils';
import { Piece } from './piece';
import { hasDiagonalBlockPiece, isDiagonalMove } from './validations';

export class Bishop implements Piece {
  move(current: string, next: string, board: IBoard): boolean {
    if (!isDiagonalMove(current, next)) return false;

    return !hasDiagonalBlockPiece(current, next, board);
  }
}
