import GameController from "./scripts/game-controller-class";
import HtmlController from "./scripts/html-controller-class";
import "./styles.css";

const htmlP1Grid = document.querySelector(".P1grid");
const htmlCPUGrid = document.querySelector(".CPUgrid");

GameController.shipList = GameController.generateShips(2, 2, 3, 4, 5);
GameController.gameboardSize = 10;

GameController.startGame(htmlP1Grid, htmlCPUGrid);

const htmlRestartGame = document.querySelector(".new-game-button");
const htmlRandomizeShips = document.querySelector(".randomizer");

htmlRestartGame.addEventListener("click", () => {
    GameController.startGame(htmlP1Grid, htmlCPUGrid);
    HtmlController.declareWinner(null);
});

htmlRandomizeShips.addEventListener("click", () => {
    GameController.startGame(htmlP1Grid, htmlCPUGrid);
});
