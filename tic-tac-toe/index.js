const matrix = document.querySelector('.matrix');
const boxes = document.querySelectorAll('.box');
const playerDisplay = document.querySelector('.player-display');
const result = document.querySelector('.result');
const players = ['X','O'];
const gameActive = true;
let currentPlayer = players[0];


const winning_combinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

const handleClick = () => {
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            if(box.textContent !== ''){
                return;
            }
            box.textContent = currentPlayer;
            if(checkWin(currentPlayer)){
                result.textContent = `Player ${currentPlayer} wins`;
                gameActive = false;
                if(!gameActive){
                    return;
                }
            }
            if(checkTie()){
                result.textContent = `Game is tied`;
                gameActive = false;
                if(!gameActive){
                    return;
                }
                return;
            }
            currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
            if(currentPlayer === players[0]){
                playerDisplay.textContent = currentPlayer;
            } else {
                playerDisplay.textContent = currentPlayer;
            }
        });
    })
}

const checkWin = (currentPlayer) => {
    for(let i=0;i<winning_combinations.length;i++){
        const [a, b, c] = winning_combinations[i];
        if(boxes[a].textContent === currentPlayer && boxes[b].textContent === currentPlayer && boxes[c].textContent === currentPlayer){
            return true;
        }
    }
    return false;
}

const checkTie = () => {
    for(let i=0;i<boxes.length;i++){
        if(boxes[i].textContent === ''){
            return false;
        }
    }
    return true;
}

function resetGame(){
    for(let i=0;i<boxes.length;i++){
        boxes[i].textContent = '';
    }
    playerDisplay.textContent = players[0];
    result.textContent = "";
    currentPlayer = players[0];
}

handleClick();