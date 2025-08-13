const Ship = require("./ship-class");

class GameController {
    // function to init the game
    static startGame(htmlManipulator1, htmlManipulator2) {
        const shipsList = GameController.generateShips(1, 2, 3, 4, 5);

        this.htmlManipulatorP1 = htmlManipulator1;
        this.htmlManipulatorCPU = htmlManipulator2;
        this.gameboardP1 = htmlManipulator1.gameboard;
        this.gameboardCPU = htmlManipulator2.gameboard;
        GameController.randomShipPlacement(this.gameboardP1, shipsList);
        GameController.randomShipPlacement(this.gameboardCPU, shipsList);

        htmlManipulator1.buildHTML();
        htmlManipulator2.buildHTML();
    }

    static randomShipPlacement(gameboard, shipList) {
        shipList.forEach((ship) => {
            while (true) {
                let x = Math.floor(Math.random() * 10);
                let y = Math.floor(Math.random() * 10);
                let direction = Math.random() >= 0.5 ? "h" : "v";

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

    static cpuAttack() {
        while (true) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);

            try {
                this.gameboardP1.receiveAttack(x, y);
                this.htmlManipulatorP1.buildHTML();
                console.log("cpu atack");
                break;
            } catch {}
        }
    }

    static checkWinner() {
        if (
            this.gameboardP1.shipList.length === 0 ||
            this.gameboardCPU.shipList.length === 0
        )
            return true;
        else return false;
    }
}

module.exports = GameController;
