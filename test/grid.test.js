const {
    findPosition,
    printPosition,
    findNorth,
    printNorth,
    printAround,
} = require('../src/grid');

describe('find the `1` in the grid', () => {
    const grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
    ];

    test('return its co-ordinates', () => {
        expect(
            findPosition(grid)
        ).toEqual({x: 2, y: 3});
    });

    test('return the number', () => {
        expect(
            printPosition(grid)
        ).toEqual(1);
    });
});

describe('find the `2` above the `1` in the grid', () => {
    const grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];

    test('return its co-ordinates', () => {
        expect(
            findNorth(grid)
        ).toEqual({x: 3, y: 1});
    });

    test('return the number', () => {
        expect(
            printNorth(grid)
        ).toEqual(2);
    });
});

describe('return an array of the surrounding numbers, north to south', () => {
    test('output numbers immediately surrounding `1`', () => {
        const grid = [
            [0, 0, 0, 0, 0],
            [0, 3, 0, 0, 0],
            [4, 1, 7, 0, 0],
            [0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        expect(
            printAround(grid)
        ).toEqual([3, 7, 2, 4]);
    });
    test('output numbers immediately surrounding `1`', () => {
        const grid = [
            [0, 0, 0, 0, 0],
            [0, 3, 0, 0, 0],
            [0, 1, 7, 0, 0],
            [0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        expect(
            printAround(grid)
        ).toEqual([3, 7, 2, 0]);
    });

    test('return 0 if there is no number west', () => {
        const grid = [
            [0, 0, 0, 0, 0],
            [3, 0, 0, 0, 0],
            [1, 4, 0, 0, 0],
            [5, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        expect(
            printAround(grid)
        ).toEqual([3, 4, 5, 0])
    });

    test('return 0 if there is no number north or east', () => {
        const grid = [
            [0, 0, 0, 9, 1],
            [0, 0, 0, 0, 8],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        expect(
            printAround(grid)
        ).toEqual([0, 0, 8, 9])
    });

    test('return 0 if there is no number east or south', () => {
        const grid = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2],
            [0, 0, 0, 6, 1],
        ];

        expect(
            printAround(grid)
        ).toEqual([2, 0, 0, 6])
    });
});

describe('return `0` if there is no number adjacent', () => {

    test('return surrounding numbers', () => {
        const grid = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        expect(
            printAround(grid)
        ).toEqual([0, 0, 0, 0])
    });

});
