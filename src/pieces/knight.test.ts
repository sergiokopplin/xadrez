import { Knight } from './knight';

const makeSut = (): { sut: Knight } => {
  return {
    sut: new Knight(),
  };
};

describe('Knight', () => {
  describe('canKnightMove()', () => {
    test('to return properly', () => {
      const { sut } = makeSut();

      expect(sut.move('d4', 'e6')).toBe(true);
      expect(sut.move('d4', 'f5')).toBe(true);
      expect(sut.move('d4', 'f3')).toBe(true);
      expect(sut.move('d4', 'e2')).toBe(true);
      expect(sut.move('d4', 'c2')).toBe(true);
      expect(sut.move('d4', 'b3')).toBe(true);
      expect(sut.move('d4', 'b5')).toBe(true);
      expect(sut.move('d4', 'c6')).toBe(true);
      expect(sut.move('d4', 'b6')).toBe(false);
      expect(sut.move('d4', 'd6')).toBe(false);
      expect(sut.move('d4', 'f6')).toBe(false);
      expect(sut.move('d4', 'f4')).toBe(false);
      expect(sut.move('d4', 'f2')).toBe(false);
      expect(sut.move('d4', 'd2')).toBe(false);
      expect(sut.move('d4', 'b2')).toBe(false);
      expect(sut.move('d4', 'b4')).toBe(false);
      expect(sut.move('d4', 'c5')).toBe(false);
      expect(sut.move('d4', 'd5')).toBe(false);
      expect(sut.move('d4', 'e5')).toBe(false);
      expect(sut.move('d4', 'e4')).toBe(false);
      expect(sut.move('d4', 'e3')).toBe(false);
      expect(sut.move('d4', 'd3')).toBe(false);
      expect(sut.move('d4', 'c3')).toBe(false);
      expect(sut.move('d4', 'c4')).toBe(false);
    });
  });
});
