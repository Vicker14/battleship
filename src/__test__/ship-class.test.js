const Ship = require('../scripts/ship-class');

test('Check false sunk', () => {
    const boat = new Ship(3,2);

    expect(boat.isSunk()).toBe(false)
})
test('Check true sunk', () => {
    const boat = new Ship(3,3);

    expect(boat.isSunk()).toBe(true)
})

test('Check hits', () => {
    const boat = new Ship(2,1);
    boat.hit();
    
    expect(boat.hits).toBe(2);
    expect(boat.isSunk()).toBe(true)
})
