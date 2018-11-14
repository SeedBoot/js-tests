const { grid } = require('../');

const {
    findPosition,
} = require('../src/grid')

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
    ).toEqual({x: 2, y: 3})
})
