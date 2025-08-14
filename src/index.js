import GameController from './scripts/game-controller-class';
import './styles.css';

const htmlP1Grid = document.querySelector('.P1grid');
const htmlCPUGrid = document.querySelector('.CPUgrid');

GameController.shipList = GameController.generateShips(2,2,3,4,5);
GameController.gameboardSize = 10;

GameController.startGame(htmlP1Grid,htmlCPUGrid);

// Button to start game
// Button to randomise ships