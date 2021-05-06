const playerOne = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1ScoreDisplay')
};

const playerTwo = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2ScoreDisplay')
};

const resetButton = document.querySelector('#resetButton');
const selectScorePoints = document.querySelector('#playto');

let pOnePoints = 0;
let pTwoPoints = 0;
let penalties = false;
let winPoints = 3;

function updateScore(player, opponent) {
    player.score += 1;
    player.display.innerText = +player.score;

    if (player.score === opponent.score && opponent.score === winPoints - 1) {
        penalties = true;
    }
    if (penalties) {
        if (player.score - opponent.score === 2) {
            win(player, opponent);
        }
    } else {
        if (player.score === winPoints) {
            win(player, opponent);
        }
    }
}

function win(player, opponent) {
    player.display.classList.add('winner');
    opponent.display.classList.add('looser');
    player.button.disabled = true;
    opponent.button.disabled = true;
}

playerOne.button.addEventListener('click', () => { updateScore(playerOne, playerTwo); });
playerTwo.button.addEventListener('click', () => { updateScore(playerTwo, playerOne); });

resetButton.addEventListener('click', reset);

selectScorePoints.addEventListener('change', () => {
    winPoints = +selectScorePoints.value;
    reset();
});

function reset() {
    for (let player of[playerOne, playerTwo]) {
        player.display.innerText = 0;
        player.score = 0;
        player.display.classList.remove('winner', 'looser');
        player.button.disabled = false;
        penalties = false;
    }
}