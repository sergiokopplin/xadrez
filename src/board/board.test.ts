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
})
