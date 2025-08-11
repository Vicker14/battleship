const Gameboard = require("./gameboard-class");

class GridManipuation {

    gameboard = new Gameboard(10);

    constructor(htmlElement) {
        this.htmlElement = htmlElement;
    }

    buildHTML () {
        const grid = this.gameboard.grid;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const newCell = document.createElement('div');
                newCell.classList.add('tile');

                const gridCell = grid[i][j];

                if (!gridCell.isWater()) {
                    const newCellStatus = document.createElement('div');

                    let addClass;
                    if (gridCell.isShip()) addClass = 'ship'
                    else addClass = gridCell.status;
                    
                    newCellStatus.classList.add(addClass);
                    newCell.appendChild(newCellStatus);
                }
                this.htmlElement.appendChild(newCell)
            }
        }
    }
}

module.exports = GridManipuation;
