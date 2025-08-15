const Gameboard = require('../scripts/gameboard-class');
const GameController = require('../scripts/game-controller-class');
const Ship = require('../scripts/ship-class');

const shipsList = GameController.generateShips(1,2,3,4,5);
const gameboard = new Gameboard(10);

test('Ship list creation', () => {
    expect(shipsList.length).toBe(5);

    shipsList.forEach(ship => {
        expect(ship).toBeInstanceOf(Ship);
    });
})

test('Place ships in gameboard', () => {
    GameController.randomShipPlacement(gameboard, shipsList)
    expect(gameboard.shipList.length).toBe(5);
})
