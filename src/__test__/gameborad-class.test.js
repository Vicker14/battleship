const Gameboard = require('../scripts/gameboard-class');
const GridTile = require('../scripts/gridTile-class');
const Ship = require('../scripts/ship-class');

const boat = new Ship(2, 0);

// GAMEBOARD CREATION
test('Gameboard creation', () => {
    const board = new Gameboard(5);
    
    board.grid[0].forEach( tile => {
        expect(tile).toBeInstanceOf(GridTile);
    })
})

// SHIP PLACEMENT
test('Place horizontal ship', () => {
    const board = new Gameboard(5);

    board.placeShip(0, 2, boat, 'h');
    expect(board.grid[0][2].isShip()).toBeTruthy()
    expect(board.grid[0][3].isShip()).toBeTruthy()
    expect(board.grid[1][2].isWater()).toBeTruthy()
})

test('Place vertical ship', () => {
    const board = new Gameboard(5);

    board.placeShip(0, 2, boat, 'v');
    expect(board.grid[0][2].isShip()).toBeTruthy()
    expect(board.grid[1][2].isShip()).toBeTruthy()
    expect(board.grid[0][1].isWater()).toBeTruthy()
})

test('Check ships collision on placement', () => {
    const board = new Gameboard(5);

    board.placeShip(0, 2, new Ship(2,0), 'v');

    expect(() => {board.placeShip(1, 1, new Ship(3,0), 'h')}).toThrow();
})

test('Check ships list', () => {
    const board = new Gameboard(5);

    board.placeShip(0, 2, boat, 'v');
    board.placeShip(2, 3, boat, 'h');

    expect(board.shipList.length).toBe(2);
})

// INVALID SHIP PLACEMENT
test('Ship too long', () => {
    const board = new Gameboard(5);

    expect(() => {board.placeShip(4, 1, new Ship(2,0), 'v')}).toThrow()
})



// GRID ATTACKS
test('Attack hit water', () => {
    const board = new Gameboard(5);

    board.placeShip(0, 2, boat, 'v');
    board.receiveAttack(0,0);
    expect(board.grid[0][0].isMiss).toBeTruthy()
})

test('Attack hit boat', () => {
    const board = new Gameboard(5);

    board.placeShip(0, 2, boat, 'v');

    expect(boat.hits).toBe(0);

    board.receiveAttack(0,2);

    expect(boat.hits).toBe(1);
    expect(board.grid[0][2].isHit()).toBeTruthy();
})

test('Attack hit miss', () => {
    const board = new Gameboard(5);

    board.placeShip(0, 2, boat, 'v');
    board.receiveAttack(0,0);

    expect( () => {board.receiveAttack(0,0)}).toThrow();
})

test('Attack hit already hitted boat', () => {

    const board = new Gameboard(5);

    board.placeShip(0, 2, boat, 'v');
    board.receiveAttack(0,2);

    expect( () => {board.receiveAttack(0,2)}).toThrow();
})

test('Delete shank boats', () => {
    const board = new Gameboard(5);

    board.placeShip(0, 2, new Ship(3,0), 'v');
    board.placeShip(1, 2, new Ship(3,0), 'h');

    expect(board.shipList.length).toEqual(2)

    board.receiveAttack(0,2);
    board.receiveAttack(1,2);

    expect(board.shipList.length).toEqual(2)
})
