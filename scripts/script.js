let startEvent = document.getElementById('start_event');
let container = document.getElementById('container');
let choiceWeapon = document.getElementById('choice_weapon');
let textWinner = document.getElementById('text_winner');
let playerChoice = document.getElementById('player_choice');
let computerChoice = document.getElementById('computer_choice');
let btnRock = document.getElementById('btn_rock');
let btnPaper = document.getElementById('btn_paper');
let btnScissors = document.getElementById('btn_scissors');
let playerInfo = document.getElementById('player_info');
let computerInfo = document.getElementById('computer_info');
let btnReset = document.getElementById('btn_reset');
let title = document.getElementById('title');


let player = 0;
let playerScore = 0;
let computer = 0;
let computerScore = 0;


/* Creation d'un nombre aleatoire */ 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /* Test egalité et toute les conditions de victoire */
function testWinner(player, computer) {   
    if (player === computer) {
        textWinner.style.visibility = 'visible'; 
        textWinner.innerText = 'IL Y A EGALITE';
        textWinner.style.backgroundColor = 'white'; 
    }
    if (player === 1 && computer === 2) {
        textWinner.style.visibility = 'visible'; 
        textWinner.innerText = 'VOUS AVEZ PERDU';
        textWinner.style.backgroundColor = 'red';
        computerScore++;
        computerInfo.innerText =  'POINTS ORDINATEUR : ' +computerScore;
    } else if ( player === 2 && computer === 3){
        textWinner.style.visibility = 'visible';
        textWinner.innerText = 'VOUS AVEZ PERDU';
        textWinner.style.backgroundColor = 'red';
        computerScore++;
        computerInfo.innerText = 'POINTS ORDINATEUR : ' +computerScore;
    } else if (player === 3 && computer === 1) {
        textWinner.style.visibility = 'visible';
        textWinner.innerText = 'VOUS AVEZ PERDU';
        textWinner.style.backgroundColor = 'red';
        computerScore++;
        computerInfo.innerText = 'POINTS ORDINATEUR : ' +computerScore;
    }
    if (computer === 1 && player === 2) {
        textWinner.style.visibility = 'visible'; 
        textWinner.innerText = 'VOUS AVEZ GAGNE';
        textWinner.style.backgroundColor = 'green';
        playerScore++;
        playerInfo.innerText = 'POINTS JOUEUR : ' + playerScore;
    } else if ( computer === 2 && player === 3){
        textWinner.style.visibility = 'visible';
        textWinner.innerText = 'VOUS AVEZ GAGNE';
        textWinner.style.backgroundColor = 'green';
        playerScore++;
        playerInfo.innerText = 'POINTS JOUEUR : ' + playerScore;
    } else if (computer === 3 && player === 1) {
        textWinner.style.visibility = 'visible';
        textWinner.innerText = 'VOUS AVEZ GAGNE';
        textWinner.style.backgroundColor = 'green';
        playerScore++;
        playerInfo.innerText = 'POINTS JOUEUR : ' + playerScore;
    }
    choiceWeapon.style.display = 'none';
    playerInfo.style.visibility = 'visible';
    computerInfo.style.visibility = 'visible';
    btnReset.style.display = 'block';
    playerChoice.style.visibility = 'visible';
    computerChoice.style.visibility = 'visible';
}

/* Creation d'une image (pour le computer) pour chaque choix */
function computeurImg(computer) {
    if (computer == 1) {
        let computerRock = document.createElement('img');
        computerRock.src = 'images/pierreLeft.png';
        computerChoice.innerHTML = '';
        computerChoice.appendChild(computerRock);
    } else if (computer == 2) {
        let computerPaper = document.createElement('img');
        computerPaper.src = 'images/feuilleLeft.png';
        computerChoice.innerHTML = '';
        computerChoice.appendChild(computerPaper);
    } else {
        let computerScissors = document.createElement('img');
        computerScissors.src = 'images/ciseauxLeft.png';
        computerChoice.innerHTML = '';
        computerChoice.appendChild(computerScissors);
    }
}
/* Creation d'une image (pour le player) pour chaque choix */
function playerImg(player) {
    if (player == 1) {
        let rockImg = document.createElement('img');
        rockImg.src = 'images/pierreRight.png';
        playerChoice.innerHTML = '';
        playerChoice.appendChild(rockImg);
    } else if (player == 2) {
        let paperImg = document.createElement('img');
        paperImg.src = 'images/feuilleRight.png';
        playerChoice.innerHTML = '';
        playerChoice.appendChild(paperImg);
    } else {
        let scissorsImg = document.createElement('img');
        scissorsImg.src = 'images/ciseauxRight.png';
        playerChoice.innerHTML = '';
        playerChoice.appendChild(scissorsImg);
    }
}

    
/* Events au click pour afficher l'application */
startEvent.addEventListener('click', function () {
    container.style.display = 'block';
    startEvent.style.display = 'none';
    title.style.display = 'none';
})

/* Events au click pour jouer */
btnRock.addEventListener('click', function () { 
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    computer = getRandomInt(1, 4);
    player = 1
    testWinner(player, computer);
    playerImg(player);
    computeurImg(computer);


})
btnPaper.addEventListener('click', function () {    
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    player = 2
    computer = getRandomInt(1, 4);
    testWinner(player, computer);
    playerImg(player);
    computeurImg(computer);


})
btnScissors.addEventListener('click', function () {   
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    player = 3
    computer = getRandomInt(1, 4);
    testWinner(player, computer);
    playerImg(player);
    computeurImg(computer);


})

btnReset.addEventListener('click', function () {
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    player = 0
    computer = 0
    playerChoice.style.visibility = 'hidden';
    computerChoice.style.visibility = 'hidden';
    textWinner.style.visibility = 'hidden';
if (playerScore === 3) {
    alert('Bravo Vous avez gagné la partie');
    playerScore = 0;
    computerScore = 0;
    playerInfo.innerText = 'POINTS JOUEUR : ' + playerScore;
    computerInfo.innerText = 'POINTS ORDINATEUR : ' +computerScore;
} else if (computerScore === 3) {
    alert('Mince Vous avez perdu la partie');
    playerScore = 0;
    computerScore = 0;
    playerInfo.innerText = 'POINTS JOUEUR : ' + playerScore;
    computerInfo.innerText = 'POINTS ORDINATEUR : ' +computerScore;
}
})

