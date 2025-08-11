const Ship = require("./ship-class");

class GridTile {

    static miss = 'miss';
    static hit = 'hit';
    static water = 'water';

    constructor () {
        this.status = this.constructor.water;
    }

    isMiss () {
        return this.status === this.constructor.miss
    }
    isHit () {
        return this.status === this.constructor.hit
    }
    isWater () {
        return this.status === this.constructor.water
    }
    isShip () {
        return this.status instanceof Ship
    }

    setTile (status) {
        if (status === this.constructor.miss) {this.status = this.constructor.miss}
        if (status === this.constructor.hit) {this.status = this.constructor.hit}
        if (status === this.constructor.water) {this.status = this.constructor.water}
        if (status instanceof Ship) {this.status = status}
    }
}

module.exports = GridTile;