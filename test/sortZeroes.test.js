const sortZeroes = require('../src/sortZeroes');

describe('Create a function that moves all zeroes in an array to its end', () => {
    test('sort [0, 1] to [1, 0]', () => {
        expect( sortZeroes([0, 1]) )
            .toEqual([1, 0])
    });

    xtest('sort [1, 0] to [1, 0]', () => {
        expect( sortZeroes([1, 0]) )
            .toEqual([1, 0])
    });

    xtest('sort [0, 1, 2, 0, 4] to [1, 2, 4, 0, 0]', () => {
        expect( sortZeroes([0, 1, 2, 0, 4]) )
            .toEqual([1, 2, 4, 0, 0])
    });

    xtest('sort [1, 99, 0, 3, 0, 0, 6] to [1, 99, 3, 6, 0, 0, 0]', () => {
        expect( sortZeroes([1, 99, 0, 3, 0, 0, 6]) )
            .toEqual([1, 99, 3, 6, 0, 0, 0])
    });
});
