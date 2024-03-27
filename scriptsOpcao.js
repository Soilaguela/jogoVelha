// Seleciona o elemento 'Start'
const op = document.querySelector('options');

// Seleciona os botões
const computador = document.querySelector(".computer");
const btnAmingo = document.querySelector('.friend');
const x = document.querySelector('.x');
const o = document.querySelector('.o');
const play = document.querySelector('.play');

// Inicializa o elemento para GAME OVER
const gemaOverElement = document.querySelector('.gema-overlay');

// Cria um objeto para representar os jogadores
const player = new Object;
let opponent;

// Adiciona um evento ao clicar no botão 'O'
o.addEventListener("click", function(){
    // Define os símbolos para cada jogador
    player.man = 'O';
    player.computador = 'X';
    player.friend = 'X';

    // Alterna a classe ativa entre 'X' e 'O'
    switchActive(x,o);
})
