import GridManipuation from './scripts/gridManipulation-class';
import Ship from './scripts/ship-class';
import './styles.css';

const htmlP1Grid = document.querySelector('.P1grid');

const htmlP1Manipulator = new GridManipuation(htmlP1Grid);
const gameboardP1 = htmlP1Manipulator.gameboard;

gameboardP1.receiveAttack(0,1);
gameboardP1.placeShip(2,2,new Ship(4,0), 'v');
try {
    gameboardP1.receiveAttack(2,2);
    gameboardP1.receiveAttack(3,2);
    gameboardP1.receiveAttack(4,2);
} catch {

}

htmlP1Manipulator.buildHTML();