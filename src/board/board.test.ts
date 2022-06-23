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

  describe('getSquare', () => {
    it('should return an empty square correctly', () => {
      const { sut } = makeSut()

      const square = sut.getSquare('d4')

      expect(square).toBe(null)
    })

    it('should return an square correctly', () => {
      const { sut } = makeSut()

      const square = sut.getSquare('a3')

      expect(square.piece).toBe('p')
    })
  })
})
