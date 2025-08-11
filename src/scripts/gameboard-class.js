const GridTile = require("./gridTile-class");

class Gameboard {

    shipList = [];

    constructor (size) {
        let initialGrid = [];
        for (let i = 0; i < size; i++) {
            let array = [];
            for (let j = 0; j < size; j++) {
                array.push(new GridTile);
            }
            initialGrid.push(array);
        }
        this.grid = initialGrid;
    }

    isValidPosition (x, y, ship, direction) {

        if (direction === 'v' && x + ship.length < this.grid.length) {
            for (let i = 0; i < ship.length; i++) {
                if (!this.grid[x+i][y].isWater()) {
                    return false
                }
            }
        } else
        if (direction === 'h' && y + ship.length < this.grid[x].length) {
            for (let i = 0; i < ship.length; i++) {
                if (!this.grid[x][y+i].isWater()) {
                    return false
                }
            }
        }
        return true;
    }
    placeShip (x, y, ship, direction) {
        if (this.isValidPosition(x, y, ship, direction)) {

            if (direction === 'v') {

                for (let i = 0; i < ship.length; i++) {
                    this.grid[x+i][y].setTile(ship);
                }
            }
            else if (direction === 'h') {

                for (let i = 0; i < ship.length; i++) {
                    this.grid[x][y+i].setTile(ship);
                }
            } else throw new Error('Invalid direction');
        }
        else throw new Error('Invalid position');

        this.shipList.push(ship);
    }

    receiveAttack (x, y) {
        const tile = this.grid[x][y];

        if (tile.isWater()) {
            tile.setTile(GridTile.miss);
        } else 
        if (tile.isShip()) {
            const boat = tile.status;
            boat.hit();

            if (boat.isSunk()) {
                this.shipList = this.shipList.filter(s => s !== boat);
            }
            
            tile.setTile(GridTile.hit);

        } else {
            throw new Error('Already hitted position');
        }
    }
}

module.exports = Gameboard;