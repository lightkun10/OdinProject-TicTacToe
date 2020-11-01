import { GameBoard } from './lib/gameBoard.js';

document.addEventListener('DOMContentLoaded', function() {

    // Capture the board section of the page
    let boardBrowser = document.querySelector('#gameBoard');

    // Display the state of board
    GameBoard.renderBoard();

    // When one of the grid is clicked
    let board = document.querySelector('.board-body');
    board.addEventListener('click', function(e) {

        let row = parseInt(e.target.dataset.row);
        let col = parseInt(e.target.dataset.col);
        GameBoard.setPos(e, row, col);
    });

});