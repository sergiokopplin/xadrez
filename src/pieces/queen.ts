import { IBoard, Position } from "../utils";
import { Piece } from "./piece";
import {
  hasDiagonalBlockPiece,
  hasHorizontalBlockPiece,
  hasVerticalBlockPiece,
  isDiagonalMove,
  isHorizontalMove,
  isVerticalMove,
} from "./validations";

export class Queen implements Piece {
  move(current: Position, next: Position, board: IBoard): boolean {
    if (
      hasDiagonalBlockPiece(current, next, board) ||
      hasVerticalBlockPiece(current, next, board) ||
      hasHorizontalBlockPiece(current, next, board)
    )
      return false;

    if (isVerticalMove(current, next)) return true;
    if (isHorizontalMove(current, next)) return true;

    return isDiagonalMove(current, next);
  }
}
