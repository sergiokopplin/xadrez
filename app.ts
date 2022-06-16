type Board = string[][]

export class Chess {
  private readonly board: Board

  constructor () {
    this.board = []

    for (let y = 0; y < 8; y++) {
      this.board[y] = []

      for (let x = 0; x < 8; x++) {
        this.board[y][x] = ''
      }
    }
  }

  public getBoard (): Board {
    return this.board
  }
}
