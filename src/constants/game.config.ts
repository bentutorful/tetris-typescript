import { IShapes } from '../types/shapes';

export const CONFIG: any = {
    UPDATE_INTERVAL: 1000, // ms

    CANVAS_HEIGHT: 840,
    CANVAS_WIDTH: 640,
    CANVAS_BG_COLOR: '#555555',
    BOARD_BG_COLOR: '#000000',

    // Board/tile sizes
    BOARD_START_X: 20, // px
    BOARD_START_Y: 20, // px
    TILE_WIDTH: 40, // px
    TILE_HEIGHT: 40, // px

    // key codes
    UP_KEY: 38,
    DOWN_KEY: 40,
    LEFT_KEY: 37,
    RIGHT_KEY: 39,

    get BOARD_WIDTH() { return this.TILE_WIDTH * 10 },
    get BOARD_HEIGHT() { return this.TILE_HEIGHT * 20 }
}

export const SHAPES: IShapes = {
    i: {
        dirs: [0x0F00, 0x2222, 0x00F0, 0x4444],
        color: 'cyan'
    },
    j: {
        dirs: [0x44C0, 0x8E00, 0x6440, 0x0E20],
        color: 'blue'
    },
    l: {
        dirs: [0x4460, 0x0E80, 0xC440, 0x2E00],
        color: 'orange'
    },
    o: {
        dirs: [0xCC00, 0xCC00, 0xCC00, 0xCC00],
        color: 'yellow'
    },
    s: {
        dirs: [0x06C0, 0x8C40, 0x6C00, 0x4620],
        color: 'green'
    },
    t: {
        dirs: [0x0E40, 0x4C40, 0x4E00, 0x4640],
        color: 'purple'
    },
    z: {
        dirs: [0x0C60, 0x4C80, 0xC600, 0x2640],
        color: 'red'
    }
}
