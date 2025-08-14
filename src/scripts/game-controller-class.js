const Gameboard = require("./gameboard-class");
const HtmlController = require("./html-controller-class");
const Ship = require("./ship-class");

class GameController {
    static shipList = GameController.generateShips(2, 2, 3, 4, 5);
    static gameboardSize = 10;
    // function to init the game
    static startGame(htmlGameboard1, htmlGameboard2) {

        this.gameboardP1 = new Gameboard(this.gameboardSize);
        this.gameboardCPU = new Gameboard(this.gameboardSize);

        this.htmlControllerP1 = new HtmlController(htmlGameboard1, this.gameboardP1, false)
        this.htmlControllerCPU = new HtmlController(htmlGameboard2, this.gameboardCPU, true)

        this.randomShipPlacement(this.gameboardP1, this.shipList);
        this.randomShipPlacement(this.gameboardCPU, this.shipList);

        this.htmlTileListP1 = this.htmlControllerP1.buildHTML();
        this.htmlTileListCPU = this.htmlControllerCPU.buildHTML();

        this.attackOnClick(this.htmlTileListCPU, this.gameboardCPU, this.gameboardP1);
        // add event listener to cpu html elements
            // attack when click
    }

    static randomShipPlacement(gameboard, shipList) {
        shipList.forEach((ship) => {
            while (true) {
                let x = Math.floor(Math.random() * 10);
                let y = Math.floor(Math.random() * 10);
                let direction = Math.random() > 0.5 ? "h" : "v";

                try {
                    gameboard.placeShip(x, y, ship, direction);
                    break;
                } catch {}
            }
        });
    }

    static generateShips(...lengthX) {
        let shipList = [];

        lengthX.forEach((value) => {
            shipList.push(new Ship(value, 0));
        });

        return shipList;
    }

    static cpuAttack() {
        while (true) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);

            try {
                this.gameboardP1.receiveAttack(x, y);
                HtmlController.updateHtmlTile(this.htmlTileListP1[x][y], this.gameboardP1.grid[x][y]);
                break;
            } catch {}
        }
    }

    static checkWinner() {
        if (
            this.gameboardP1.shipList.length === 0 ||
            this.gameboardCPU.shipList.length === 0
        ) return true;
        else return false;
    }

    static attackOnClick(htmlTileList, ownGameboard, rivalGameboard) {
        for (let i = 0; i < htmlTileList.length; i++) {
            for (let j = 0; j < htmlTileList[i].length; j++) {
                
                const tileHtml = htmlTileList[i][j];
                const tileGameboard = ownGameboard.grid[i][j];

                tileHtml.addEventListener("click", () => {
                    try {
                        console.log('1')
                        ownGameboard.receiveAttack(i,j);
                        HtmlController.updateHtmlTile(tileHtml, tileGameboard);
                        this.cpuAttack();
                    }
                    catch {}
                })
            }
        }
    }
}

module.exports = GameController;
