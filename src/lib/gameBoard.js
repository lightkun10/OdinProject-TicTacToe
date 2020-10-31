/**
 * Module pattern: GameBoard
 */

let GameBoard = (function() {
    // For starter, setup 3x3 board
    let _board = [['X', 'O', 'X'], 
                  ['O', 'X', 'O'], 
                  ['X', 'X', 'O']];

    // Display current state of browser
    const displayBoard = () => {
        // let half = Math.sqrt(_board.length);
        for (let i = 0; i < _board.length; i++) {
            let board = document.querySelector('.board-body');
            
            // tr
            let row = board.insertRow(i);
            // td
            for (let j = 0; j < _board[i].length; j++) {
                let col = row.insertCell(j);
                col.dataset.row = i;
                col.dataset.col = j;
                col.innerText = _board[i][j];
                col.className = "grid-item";
            }
        }
    };

    return {
        displayBoard
    };
    
})();

export { GameBoard }