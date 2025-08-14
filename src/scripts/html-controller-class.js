class HtmlController {
    constructor(htmlElement, gameboard, rival) {
        this.htmlElement = htmlElement;

        this.rival = rival;

        this.gameboard = gameboard;
        this.grid = this.gameboard.grid;
    }

    buildHTML() {
        this.htmlElement.textContent = "";

        let htmlTileList = [];

        for (let i = 0; i < this.grid.length; i++) {

            let xHtmlTileList = [];

            for (let j = 0; j < this.grid[i].length; j++) {

                const gameboardTile = this.grid[i][j];

                const htmlTile = document.createElement("div");
                htmlTile.classList.add("tile");

                this.constructor.updateHtmlTile(htmlTile, gameboardTile);
                this.htmlElement.appendChild(htmlTile);
                xHtmlTileList.push(htmlTile);
            }
            htmlTileList.push(xHtmlTileList);
        }
        return htmlTileList;
    }

    static updateHtmlTile(htmlTile, gameboardTile) {
        if (!gameboardTile.isWater()) {
            const newCellStatus = document.createElement("div");

            let addClass;

            if (gameboardTile.isShip()) {
                if (!this.rival) addClass = "ship";
            } else addClass = gameboardTile.status;
            newCellStatus.classList.add(addClass);

            htmlTile.appendChild(newCellStatus);
        }
    }

    // declareWinner(winner) {
    //     const htmlBody = document.querySelector("body");

    //     const winnerMessage = document.createElement("div");
    //     winnerMessage.classList.add("winner");
    //     winnerMessage.textContent = `The winner is ${winner}`;

    //     htmlBody.appendChild(winnerMessage);
    // }
}

module.exports = HtmlController;
