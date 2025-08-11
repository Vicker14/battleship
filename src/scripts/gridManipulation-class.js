const Gameboard = require("./gameboard-class");

class GridManipuation {

    gameboard = new Gameboard(10);
    grid = this.gameboard.grid;

    constructor(htmlElement, rival) {
        this.htmlElement = htmlElement;
        this.rival = rival;
    }


    buildHTML () {
        for (let i = 0; i < this.grid.length; i++) {

            for (let j = 0; j < this.grid[i].length; j++) {
                const gridCell = this.grid[i][j];

                const htmlCell = document.createElement('div');
                htmlCell.classList.add('tile');

                htmlCell.addEventListener('click', () => {
                    try {
                        this.gameboard.receiveAttack(gridCell.coordX, gridCell.coordY);
                        this.setStatus(htmlCell, gridCell);
                    } catch {}
                });

                this.setStatus(htmlCell, gridCell);

                this.htmlElement.appendChild(htmlCell)
            }
        }
    }

    setStatus (htmlTile, gameboardTile) {
        if (!gameboardTile.isWater()) {
            const newCellStatus = document.createElement('div');

            let addClass;

            if (gameboardTile.isShip()) {
                if (!this.rival) addClass = 'ship';
            }
            else addClass = gameboardTile.status;
            newCellStatus.classList.add(addClass);

            htmlTile.appendChild(newCellStatus);
        }
    }    
}

module.exports = GridManipuation;
