import { Board } from "./board";

const makeSut = (params?: any): { sut: Board } => ({
  sut: new Board(params),
});

describe("Board", () => {
  describe("constructor", () => {
    it("ensure board creation", () => {
      const { sut } = makeSut();

      expect(sut).toBeTruthy();
    });

    it("ensure board create and populate squares correctly", () => {
      const { sut } = makeSut();

      expect(sut.board).toMatchSnapshot();
    });
  });

  describe("customRows", () => {
    it("ensure board creation with custom rows", () => {
      const { sut } = makeSut([
        null,
        null,
        null,
        "ppppPPPP",
        null,
        null,
        null,
        null,
      ]);

      expect(sut.printBoard()).toMatchSnapshot();
    });
  });

  describe("printBoard", () => {
    it("ensure board print", () => {
      const { sut } = makeSut();
      expect(sut.printBoard()).toMatchSnapshot();
    });
  });

  describe("inferPieceColor", () => {
    it("should return null when empty square", () => {
      const { sut } = makeSut();

      const color = sut.inferPieceColor("d4");

      expect(color).toBe(null);
    });

    it("should return black", () => {
      const { sut } = makeSut();

      const color = sut.inferPieceColor("h8");

      expect(color).toBe("black");
    });

    it("should return white", () => {
      const { sut } = makeSut();

      const color = sut.inferPieceColor("c2");

      expect(color).toBe("white");
    });
  });

  describe("isOpponent", () => {
    it("should return false when comparison with empty square", () => {
      const { sut } = makeSut();

      const square = sut.isOpponent("a1", "d4");

      expect(square).toBe(false);
    });

    it("should return false when comparison with same color", () => {
      const { sut } = makeSut();

      const square = sut.isOpponent("a1", "a2");

      expect(square).toBe(false);
    });

    it("should return false when comparison with same color", () => {
      const { sut } = makeSut();

      const square = sut.isOpponent("a1", "h8");

      expect(square).toBe(true);
    });
  });

  describe("getSquare", () => {
    it("should return an empty square correctly", () => {
      const { sut } = makeSut();

      const square = sut.getSquare("d4");

      expect(square).toBe(null);
    });

    it("should return an square correctly", () => {
      const { sut } = makeSut();

      const square = sut.getSquare("c1");

      expect(square).toEqual({ piece: "b" });
    });
  });

  describe("setPiece", () => {
    it("should set piece correctly when null", () => {
      const { sut } = makeSut();

      sut.setPiece(null, "a1");

      expect(sut.board[0][0]).toEqual(null);
    });

    it("should set piece correctly", () => {
      const { sut } = makeSut();

      sut.setPiece("P", "d3");

      expect(sut.board[2][3]).toEqual({ piece: "P" });
    });
  });

  describe("move", () => {
    it("should not move when same color piece", () => {
      const { sut } = makeSut();

      sut.move("a1", "d2");

      expect(sut.board[0][0]).toEqual({ piece: "r" });
      expect(sut.board[1][3]).toEqual({ piece: "p" });
    });

    it("should move when empty position", () => {
      const { sut } = makeSut();

      sut.move("a2", "a3");

      expect(sut.board[1][0]).toEqual(null);
      expect(sut.board[2][0]).toEqual({ piece: "p" });
    });

    it("should move when opponent", () => {
      const { sut } = makeSut();

      sut.move("a2", "a3");
      sut.move("a3", "a4");
      sut.move("a4", "a5");
      sut.move("a5", "a6");
      sut.move("a6", "a7");

      expect(sut.board[1][0]).toEqual(null);
      expect(sut.board[2][0]).toEqual(null);
      expect(sut.board[3][0]).toEqual(null);
      expect(sut.board[4][0]).toEqual(null);
      expect(sut.board[5][0]).toEqual(null);
      expect(sut.board[6][0]).toEqual({ piece: "p" });
    });

    it("should not move when invalid", () => {
      const { sut } = makeSut();

      sut.move("a4", "a5");

      expect(sut.board).toMatchSnapshot();
    });
  });
});
