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

                this.constructor.updateHtmlTile(htmlTile, gameboardTile, this.rival);
                this.htmlElement.appendChild(htmlTile);
                xHtmlTileList.push(htmlTile);
            }
            htmlTileList.push(xHtmlTileList);
        }
        return htmlTileList;
    }

    static updateHtmlTile(htmlTile, gameboardTile, isRival) {
        if (!gameboardTile.isWater()) {
            const newCellStatus = document.createElement("div");

            let addClass;

            if (gameboardTile.isShip()) {
                if (!isRival) addClass = "ship";
            } else { 
                addClass = gameboardTile.status;
            }
            newCellStatus.classList.add(addClass);

            htmlTile.appendChild(newCellStatus);
        }
    }

    static declareWinner(winner) {
        const htmlWinnerText = document.querySelector(".winner-text");
        const htmlWinnerScreen = document.querySelector(".winner-screen")

        htmlWinnerText.textContent = `The winner is ${winner}`;
        htmlWinnerScreen.classList.toggle('hidden')
    }
}

module.exports = HtmlController;
