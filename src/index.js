import GameController from './scripts/gameController-class';
import GridManipuation from './scripts/gridManipulation-class';
import './styles.css';

const htmlP1Grid = document.querySelector('.P1grid');
const htmlP1Manipulator = new GridManipuation(htmlP1Grid, false);
const htmlCPUGrid = document.querySelector('.CPUgrid');
const htmlCPUManipulator = new GridManipuation(htmlCPUGrid, true);

GameController.startGame(htmlP1Manipulator,htmlCPUManipulator);

// Button to start game
// Button to randomise ships