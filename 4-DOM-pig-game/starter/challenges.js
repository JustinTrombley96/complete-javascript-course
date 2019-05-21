/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;



init();

document.querySelector('.btn-instructions').addEventListener('click', function () {
    alert("The first person to get to 200 points wins! You can change the target score by typing a number into the 'Final Score' box. By pressing 'Roll Dice,' you will roll two dice. If you are happy with your score, you will press 'Hold,' this will end your turn and add your points to your total score. If you want to try and go for more points, you can continue rolling by pressing 'Roll Dice.' If either of your dice are a 1, your turn will end and you will receive no points for that round. If both dice are a 1, your total score will reset. If both dice are equal to six, you will receive double points for that roll. Good luck!")
})
document.querySelector('.btn-story').addEventListener('click', function () {
    alert("1000 days on Dimension One is a long time. Leo likes to pass the time by making up different games and forcing Max to play them. He calls this one, 'Snake Eyes and Die.'")
})
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        //2. Display the result
        document.getElementById('dice-1').style.display = 'block'
        document.getElementById('dice-2').style.display = 'block'
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png'
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'



        //3. Update the round score IF the rolled number was NOT a 1
        if (dice1 === 1 && dice2 === 1) {
            //Player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0'
            alert("Snake Eyes! Your score has reset.")
            console.log(dice1, dice2)
            nextPlayer();
        } else if (dice1 === 6 && dice2 === 6) {
            roundScore += (dice1 + dice2 + dice1 + dice2)
            alert("You've hit the jackpot! Double Points!")
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            console.log(dice1, dice2)
        } else if (dice1 !== 1 && dice2 !== 1) {
            //Add Score
            roundScore += dice1 + dice2;
            //roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            console.log(dice1, dice2)

        } else {
            //Next Player
            console.log(dice1, dice2)
            nextPlayer();


            // if(activePlayer === 0) {
            //     activePlayer = 1;
            // } else {
            //     activePlayer = 0;
            // } ^This is the longer way. The way we are using is the ternary operator.
        }
    }


});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        // scores[activePlayer] = scores[activePlayer] + roundScore; This is the same thing.


        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Undefined, 0, null or "" are Coerced to false
        // Anything else is Coerced to true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 200;
        }

        //Check if player won the game    

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.getElementById('dice-1').style.display = 'none'
            document.getElementById('dice-2').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next Player
            nextPlayer()
        }
    }


})

function nextPlayer() {
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    //document.querySelector('.player-0-panel').classList.remove('active')
    //document.querySelector('.player-1-panel').classList.add('active')

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'



    // if(activePlayer === 0) {
    //     activePlayer = 1;
    // } else {
    //     activePlayer = 0;
    // } ^This is the longer way. The way we are using is the ternary operator.
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    gamePlaying = true;
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Leo';
    document.getElementById('name-1').textContent = 'Max';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');





}