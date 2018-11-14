module.exports = {
    // util
    log: value => console.log(JSON.stringify(value, null, 2)),

    // for grid module
    grid: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
    ],
}
