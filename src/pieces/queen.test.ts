import { Board } from "../board/board";
import { Queen } from "./queen";

const makeSut = (): { sut: Queen } => {
  return {
    sut: new Queen(),
  };
};

export const makeBoard = (): Board => new Board();

describe("Queen", () => {
  describe("move()", () => {
    test("to return properly with valid moves", () => {
      const { sut } = makeSut();

      expect(sut.move("c3", "c6", makeBoard().board)).toBe(true);
      expect(sut.move("c6", "c3", makeBoard().board)).toBe(true);
      expect(sut.move("c4", "f4", makeBoard().board)).toBe(true);
      expect(sut.move("f4", "c4", makeBoard().board)).toBe(true);
      expect(sut.move("c3", "f6", makeBoard().board)).toBe(true);
      expect(sut.move("f6", "c3", makeBoard().board)).toBe(true);
    });

    test("to return properly with invalid moves", () => {
      const { sut } = makeSut();

      expect(sut.move("c4", "a1", makeBoard().board)).toBe(false);
    });
  });
});
