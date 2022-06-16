type Board = number[]

export class Chess {
  private readonly size: number
  public readonly board: Board

  constructor () {
    const dimensions = 8

    this.size = dimensions * dimensions
    this.board = []

    for (let index = 0; index < this.size; index++) {
      this.board[index] = 0
    }
  }

  public getBoard (): Board {
    return this.board
  }
}
