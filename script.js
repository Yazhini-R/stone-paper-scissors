function playGame(playerChoice) {
    const choices = ['stone', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = '';
    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (playerChoice === 'stone' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'stone') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    document.getElementById('result').textContent = 
        `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}
