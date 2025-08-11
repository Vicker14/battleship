const Gameboard = require("./gameboard-class");

class GridManipuation {

    gameboard = new Gameboard(10);

    constructor(htmlElement) {
        this.htmlElement = htmlElement;
    }

    buildHTML () {
        this.htmlElement.textContent = '';
        const grid = this.gameboard.grid;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const gridCell = grid[i][j];
                const newCell = document.createElement('div');
                newCell.classList.add('tile');
                newCell.addEventListener('click', () => {
                    this.gameboard.receiveAttack(gridCell.coordX, gridCell.coordY)
                    this.buildHTML();
                });

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
