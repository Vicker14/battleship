const Gameboard = require("./gameboard-class");
const HtmlController = require("./html-controller-class");
const Ship = require("./ship-class");

class GameController {

    static gameboardSize = 10;
    
    static startGame(htmlGameboard1, htmlGameboard2) {

        this.shipListP1 = GameController.generateShips(2, 2, 3, 4, 5);
        this.shipListCPU = GameController.generateShips(2, 2, 3, 4, 5);

        this.gameboardP1 = new Gameboard(this.gameboardSize);
        this.gameboardCPU = new Gameboard(this.gameboardSize);

        this.htmlControllerP1 = new HtmlController(htmlGameboard1, this.gameboardP1, false)
        this.htmlControllerCPU = new HtmlController(htmlGameboard2, this.gameboardCPU, true)

        this.randomShipPlacement(this.gameboardP1, this.shipListP1);
        this.randomShipPlacement(this.gameboardCPU, this.shipListCPU);

        this.htmlTileListP1 = this.htmlControllerP1.buildHTML();
        this.htmlTileListCPU = this.htmlControllerCPU.buildHTML();

        this.attackOnClick(this.htmlTileListCPU, this.gameboardCPU);
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

    static attackOnClick(htmlTileList, ownGameboard) {
        for (let i = 0; i < htmlTileList.length; i++) {
            for (let j = 0; j < htmlTileList[i].length; j++) {
                
                const tileHtml = htmlTileList[i][j];
                const tileGameboard = ownGameboard.grid[i][j];

                tileHtml.addEventListener("click", () => {
                    try {
                        ownGameboard.receiveAttack(i,j);
                        HtmlController.updateHtmlTile(tileHtml, tileGameboard, this.htmlControllerP1.rival);
                        if (this.checkWinner()) {
                            HtmlController.declareWinner('Player 1')
                            throw new Error('Game end')
                        };
                        this.cpuAttack();
                        if (this.checkWinner()) HtmlController.declareWinner('CPU');                        
                    }
                    catch {}
                })
            }
        }
    }
}

module.exports = GameController;
