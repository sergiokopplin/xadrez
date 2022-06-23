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

    it('should return black', () => {
      const { sut } = makeSut()

      const color = sut.inferPieceColor('b3')

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
  })

  describe('getSquare', () => {
    it('should return an empty square correctly', () => {
      const { sut } = makeSut()

      const square = sut.getSquare('d4')

      expect(square).toBe(null)
    })

    it('should return an square correctly', () => {
      const { sut } = makeSut()

      const square = sut.getSquare('a3')

      expect(square.piece).toBe('b')
    })
  })
})
