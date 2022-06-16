type Board = string[][]
type Square = string
type Piece = string

export class Chess {
  private readonly board: Board
  private readonly limit: number

  constructor () {
    this.board = []
    this.limit = 8

    for (let y = 0; y < this.limit; y++) {
      this.board[y] = []

      for (let x = 0; x < this.limit; x++) {
        this.board[y][x] = ''
      }
    }
  }

  public getBoard (): Board {
    return this.board
  }

  public put (piece: Piece, square: Square): void {
    const [y, x] = this.getNumericPosition(square)

    if (y >= this.limit || x >= this.limit) {
      throw new Error('Invalid Put')
    }

    this.board[y][x] = piece
  }

  private getNumericPosition (square: Square): number[] {
    const [y, x] = square.split('')

    return [parseInt(y), parseInt(x)]
  }
}
