const { grid } = require('../');

const {
    findPosition,
} = require('../src/grid')

test('find the `1` in the grid', () => {
    expect(
        findPosition(grid)
    ).toEqual({x: 2, y: 3})
})
