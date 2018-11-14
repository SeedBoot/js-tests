const {
    addTime,
} = require('../src/time');

test('add ten minutes', () => {
    expect(
        addTime(10, 0, 10)
    ).toEqual('10:10')
})

test('add minutes to change an hour', () => {
    expect(
        addTime(12, 30, 31)
    ).toEqual('13:01')
})

test('add minutes to go past midnight', () => {
    expect(
        addTime(23, 45, 30)
    ).toEqual('00:15')
})

test('add more than 59 minutes', () => {
    expect(
        addTime(10, 0, 120)
    ).toEqual('12:00')
})
