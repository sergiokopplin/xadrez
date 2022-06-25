import { Board } from '../board/board'
import { Bishop } from './bishop'

const makeSut = (): { sut: Bishop } => {
  return {
    sut: new Bishop()
  }
}

export const makeBoard = (): Board => {
  return new Board()
}

describe('Bishop', () => {
  describe('move()', () => {
    test('to return properly', () => {
      const { sut } = makeSut()

      expect(sut.move('c4', 'c6', makeBoard().board)).toBe(false)
      expect(sut.move('c4', 'a4', makeBoard().board)).toBe(false)
      expect(sut.move('c4', 'e6', makeBoard().board)).toBe(true)
    })
  })
})
