export const CONFIG: any = {
    TILE_WIDTH: 40,
    TILE_HEIGHT: 40,

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
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    J: [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ],
    O: [
        [1, 1],
        [1, 1],
    ],
    S: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    Z: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    I: [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ]
}
