class Ship {
    constructor(length, hits) {
        this.length = length;
        this.hits = hits;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        return this.length === this.hits;
    }
}

module.exports = Ship;
