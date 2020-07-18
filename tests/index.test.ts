import { immutableFindReplace } from '../src/index';

describe('immutable find replace tests', () => {
  const initialArray = [1, 2, 3, 4, 5];

  it('replaces by single value', () => {
      const expectedArray = [1, 2, 3, 4, 10];

      const result = immutableFindReplace(initialArray, x => x === 5, 10);

      expect(result).toStrictEqual(expectedArray);
      expect(initialArray).toStrictEqual(initialArray);
  });

  it('replaces by array', () => {
    const expectedArray = [1, 2, 3, 4, 10, 11, 12, 13];

    const result = immutableFindReplace(initialArray, x => x === 5, 10, 11, 12, 13);

    expect(result).toStrictEqual(expectedArray);
    expect(initialArray).toStrictEqual(initialArray);
  });

  it('replaces by reducer function', () => {
    const expectedArray = [2, 4, 6, 8, 10];

    const result = immutableFindReplace(initialArray, x => true, x => x * 2);

    expect(result).toStrictEqual(expectedArray);
    expect(initialArray).toStrictEqual(initialArray);
  });

  it('deletes found values', () => {
    const expectedArray = [1, 5];

    const result = immutableFindReplace(initialArray, x => x > 1 && x < 5);

    expect(result).toStrictEqual(expectedArray);
    expect(initialArray).toStrictEqual(initialArray);
  });

  it('keeps array the same', () => {
    const result = immutableFindReplace(initialArray, x => x === 777, 10, 11, 12, 13);

    expect(result).toStrictEqual(initialArray);
    expect(initialArray).toStrictEqual(initialArray);
  });
});