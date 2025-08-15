const Tile = require("../scripts/tile-class");
const Ship = require("../scripts/ship-class");

const gridTile = new Tile();
const boat = new Ship(2,0);

test('Check tile creation', () => {

    expect(gridTile.status).toBe("water")
})

test('Check if miss', () => {
    gridTile.setTile("miss")

    expect(gridTile.status).toBe("miss")
})

test('Check if hit', () => {
    gridTile.setTile(Tile.hit)

    expect(gridTile.status).toBe("hit")
})

test('Check if water', () => {
    gridTile.setTile("water")

    expect(gridTile.status).toBe("water")
})

test('Check if boat', () => {
    gridTile.setTile(boat)

    expect(gridTile.status).toBe(boat)
})

test('Check if water', () => {
    gridTile.setTile("water")

    expect(gridTile.isWater()).toBeTruthy()
})
