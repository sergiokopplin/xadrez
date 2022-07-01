import { Board } from './board'

const makeSut = (): { sut: Board } => ({
  sut: new Board()
})

describe('Board', () => {
  describe('constructor', () => {
    it('ensure board creation', () => {
      const { sut } = makeSut()

      expect(sut).toBeTruthy()
    })

    it('ensure board create and populate squares correctly', () => {
      const { sut } = makeSut()

      expect(sut.board).toMatchSnapshot()
    })
  })

  describe('inferPieceColor', () => {
    it('should return null when empty square', () => {
      const { sut } = makeSut()

      const color = sut.inferPieceColor('d4')

      expect(color).toBe(null)
    })

    it('should return black', () => {
      const { sut } = makeSut()

      const color = sut.inferPieceColor('h8')

      expect(color).toBe('black')
    })

    it('should return white', () => {
      const { sut } = makeSut()

      const color = sut.inferPieceColor('c2')

      expect(color).toBe('white')
    })
  })

  describe('isOpponent', () => {
    it('should return false when comparison with empty square', () => {
      const { sut } = makeSut()

      const square = sut.isOpponent('a1', 'd4')

      expect(square).toBe(false)
    })

    it('should return false when comparison with same color', () => {
      const { sut } = makeSut()

      const square = sut.isOpponent('a1', 'a2')

      expect(square).toBe(false)
    })

    it('should return false when comparison with same color', () => {
      const { sut } = makeSut()

      const square = sut.isOpponent('a1', 'h8')

      expect(square).toBe(true)
    })
  })

  describe('getSquare', () => {
    it('should return an empty square correctly', () => {
      const { sut } = makeSut()

      const square = sut.getSquare('d4')

      expect(square).toBe(null)
    })

    it('should return an square correctly', () => {
      const { sut } = makeSut()

      const square = sut.getSquare('c1')

      expect(square.piece).toBe('b')
    })
  })

  describe('setPiece', () => {
    it('should set piece correctly when null', () => {
      const { sut } = makeSut()

      sut.setPiece(null, 'a1')

      expect(sut.board[0][0]).toEqual(null)
    })

    it('should set piece correctly', () => {
      const { sut } = makeSut()

      sut.setPiece('P', 'd3')

      expect(sut.board[2][3]).toEqual({ piece: 'P' })
    })
  })
})
