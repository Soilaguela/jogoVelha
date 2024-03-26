const board = document.querySelector('.board');
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];

    function renderBoard() {
        board.innerHTML = '';
        gameState.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.innerText = cell;
            cellElement.addEventListener('click', () => handleCellClick(index));
            board.appendChild(cellElement);
        });
    }

    function handleCellClick(index) {
        if (gameState[index] === '' && !isGameOver()) {
            gameState[index] = currentPlayer;
            renderBoard();
            if (checkWinner(currentPlayer)) {
                alert(`Jogador ${currentPlayer} ganhou!`);
                resetGame();
            } else if (checkDraw()) {
                alert('Empate!');
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWinner(player) {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        return winningConditions.some(condition => 
            condition.every(index => gameState[index] === player)
        );
    }

    function isGameOver() {
        return gameState.every(cell => cell !== '') || checkWinner('X') || checkWinner('O');
    }

    function checkDraw() {
        return gameState.every(cell => cell !== '');
    }

    function resetGame() {
        currentPlayer = 'X';
        gameState = ['', '', '', '', '', '', '', '', ''];
        renderBoard();
    }

    renderBoard();