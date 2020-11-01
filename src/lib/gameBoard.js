/**
 * Module pattern: GameBoard
 */

let GameBoard = (function() {

    let browserBoard = document.querySelector('.board-body');

    // For starter, setup 3x3 board
    let _board = [['X', 'O', 'X'], 
                  ['O', 'X', 'O'], 
                  ['X', 'X', 'O']];

    const setPos = (e, row, col) => {
        let browserSquares = browserBoard.querySelectorAll('.grid-item');

        let square = e.target;
        square.textContent = 'T';
        _board[row][col] = 'T';
        browserSquares.forEach(row => row.innerText = "");
        
        renderBoard();        
    };

    // Display current state of browser
    const renderBoard = () => {
        // let half = Math.sqrt(_board.length);
        for (let i = 0; i < _board.length; i++) {
            
            // tr
            let row = browserBoard.insertRow(i);
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
        renderBoard,
        setPos,
    };
    
})();

export { GameBoard }