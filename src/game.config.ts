export const CONFIG: any = {
    TILE_WIDTH: 30,
    TILE_HEIGHT: 30,

    get BOARD_WIDTH() { return this.TILE_WIDTH * 10 },
    get BOARD_HEIGHT() { return this.TILE_HEIGHT * 20 },
    BOARD_BG_COLOR: '#000000',

    UPDATE_INTERVAL: 1000,

    // key codes
    UP_KEY: 38,
    DOWN_KEY: 40,
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
}

export const SHAPES: any = {
    T: [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    L: [
        [0, 2, 0],
        [0, 2, 0],
        [0, 2, 2]
    ],
    J: [
        [0, 3, 0],
        [0, 3, 0],
        [3, 3, 0]
    ],
    O: [
        [4, 4],
        [4, 4],
    ],
    S: [
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0]
    ],
    Z: [
        [6, 6, 0],
        [0, 6, 6],
        [0, 0, 0]
    ],
    I: [
        [0, 7, 0, 0],
        [0, 7, 0, 0],
        [0, 7, 0, 0],
        [0, 7, 0, 0]
    ]
}

export const COLORS: any = {
    1: 'purple',
    2: 'orange',
    3: 'blue',
    4: 'yellow',
    5: 'green',
    6: 'red',
    7: 'cyan'
}
