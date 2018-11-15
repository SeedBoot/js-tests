const {
    findPosition,
    printPosition,
    findAbove,
    printAbove,
    printAround,
} = require('../src/grid');

test('find the `1` in the grid', () => {
    const grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
    ];

    expect(
        findPosition(grid)
    ).toEqual({x: 2, y: 3});

    expect(
        printPosition(grid)
    ).toEqual(1);
});

test('find the `2` above the `1` in the grid', () => {
    const grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];

    expect(
        findAbove(grid)
    ).toEqual({x: 3, y: 1});

    expect(
        printAbove(grid)
    ).toEqual(2);
})

test('output numbers immediately surrounding `1` into an array, north to south', () => {
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
