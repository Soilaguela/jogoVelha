const board = document.querySelector('.board');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', '']; // 0,1,2,

function getCurrentPlayer() {
    board.innerHTML = '';
    gameState.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.innerText = cell;
        cellElement.addEventListener('click', () => gameClick(index));
        board.appendChild(cellElement);
    });

}

function gameClick(index) {
    if (gameState[index] === '' && gameOver()) {
        gameState[index] = currentPlayer;
        getCurrentPlayer();

        if (checkWinner(currentPlayer)) {
            alert('Jagador ${currentPlayer} winner!');
            resetGame();

        } else if (checkDraw) {
            alert("It's a draw!");
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}
