import { GameBoard } from './lib/gameBoard.js';

document.addEventListener('DOMContentLoaded', function() {

    // Capture the board section of the page
    let boardBrowser = document.querySelector('#gameBoard');

    // Display the state of board
    GameBoard.displayBoard();

    // When one of the grid is clicked
    let board = document.querySelector('.board-body');
    board.addEventListener('click', function(e) {
        console.log(e.target.dataset);
    });

});