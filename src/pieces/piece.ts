import { IBoard, Position } from '../utils';

export interface Piece {
  move: (current: Position, next: Position, board: IBoard) => boolean;
}
