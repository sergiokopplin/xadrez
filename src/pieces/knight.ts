import { Position, getPositionAxis } from "../utils";
import { Piece } from "./piece";
import {
  isVerticalMove,
  isHorizontalMove,
  isDiagonalMove,
} from "./validations";

export class Knight implements Piece {
  move(current: Position, next: Position): boolean {
    if (isDiagonalMove(current, next)) return false;
    if (isVerticalMove(current, next)) return false;
    if (isHorizontalMove(current, next)) return false;

    const [cy, cx] = getPositionAxis(current);
    const [ny, nx] = getPositionAxis(next);

    return !!(
      (Math.abs(cy - ny) === 1 || Math.abs(cy - ny) === 2) &&
      (Math.abs(cx - nx) === 1 || Math.abs(cx - nx) === 2)
    );
  }
}
