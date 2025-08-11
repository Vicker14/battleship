import GridManipuation from './scripts/gridManipulation-class';
import Ship from './scripts/ship-class';
import './styles.css';

const htmlP1Grid = document.querySelector('.P1grid');
const htmlCPUGrid = document.querySelector('.CPUgrid');

const htmlP1Manipulator = new GridManipuation(htmlP1Grid, false);
const htmlCPUManipulator = new GridManipuation(htmlCPUGrid, true);

const gameboardP1 = htmlP1Manipulator.gameboard;
const gameboardCPU = htmlCPUManipulator.gameboard;

gameboardP1.placeShip(1,1,new Ship(4,0),'v');
gameboardCPU.placeShip(1,1,new Ship(4,0),'v');

htmlP1Manipulator.buildHTML();
htmlCPUManipulator.buildHTML();