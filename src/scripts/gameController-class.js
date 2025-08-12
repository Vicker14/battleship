const Ship = require("./ship-class");

class GameController {
    // function to init the game
    static startGame(htmlManipulator1, htmlManipulator2) {
        const shipsList = GameController.generateShips(1, 2, 3, 4, 5);

        const gameboardP1 = htmlManipulator1.gameboard;
        const gameboardCPU = htmlManipulator2.gameboard;
        GameController.randomShipPlacement(gameboardP1, shipsList);
        GameController.randomShipPlacement(gameboardCPU, shipsList);

        htmlManipulator1.buildHTML();
        htmlManipulator2.buildHTML();
    }

    static randomShipPlacement(gameboard, shipList) {
        shipList.forEach( ship => {
            while (true) {
                let x = Math.floor(Math.random() * 10);
                let y = Math.floor(Math.random() * 10);
                let direction = Math.random() >= 0.5 ? 'h': 'v';

                try {
                    gameboard.placeShip(x, y, ship, direction);
                    break;
                } catch {}
            }
        });
    }

    static generateShips(...lengthX) {
        let shipsList = [];

        lengthX.forEach((value) => {
            shipsList.push(new Ship(value, 0));
        });

        return shipsList;
    }

    // function to declare a winner
    // go to grid manipulation event listener and check there if the game is ended
}

module.exports = GameController;
