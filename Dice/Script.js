function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').src = 'images/dice' + dice1 + '.png';
    document.getElementById('dice2').src = 'images/dice' + dice2 + '.png';

    var infoText = 'You rolled: ' + dice1 + ' and ' + dice2;
    if (dice1 === dice2) {
        infoText += ' - Doubles! You win!';
    }

    document.getElementById('rollInfo').textContent = infoText;
}

