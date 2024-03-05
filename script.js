// Get all options (rock, paper, scissors)
const options = document.querySelectorAll('.option');

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        const tieSound = document.getElementById('tieSound');
        tieSound.play();
        setTimeout(() => {
            tieSound.pause();
            tieSound.currentTime = 0;
        }, 2000);
        console.log("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        const winSound = document.getElementById('winSound');
        winSound.play();
        setTimeout(() => {
            winSound.pause();
            winSound.currentTime = 0;
        }, 2000);
        document.querySelector('.scoreboard').classList.add('flash'); // Add animation class
        setTimeout(() => {
            document.querySelector('.scoreboard').classList.remove('flash'); // Remove animation class after a delay
        }, 500);
        console.log("You win!");
    } else {
        computerScore++;
        const loseSound = document.getElementById('loseSound');
        loseSound.play();
        setTimeout(() => {
            loseSound.pause();
            loseSound.currentTime = 1000;
        }, 3000);
        document.querySelector('.scoreboard').classList.add('red-flash'); // Add red color class
        setTimeout(() => {
            document.querySelector('.scoreboard').classList.remove('red-flash'); // Remove red color class after a delay
        }, 500);
        console.log("You lost to the computer!");
    }
}
function showComputerChoice(computerChoice) {
    const overlay = document.getElementById('overlay');
    const overlayContent = document.getElementById('overlay-content');
    const computerChoiceImage = document.getElementById('computer-choice-image');
    const computerChoiceText = document.getElementById('computer-choice-text');

    // Set the image and text based on computer's choice
    if (computerChoice === 'rock') {
        computerChoiceImage.src = `./assets/images/rock.png`;
        computerChoiceText.textContent = `Computer chose Rock`;
    } else if (computerChoice === 'paper') {
        computerChoiceImage.src = `./assets/images/paper.png`;
        computerChoiceText.textContent = `Computer chose Paper`;
    } else if (computerChoice === 'scissors') {
        computerChoiceImage.src = `./assets/images/sciccors.png`;
        computerChoiceText.textContent = `Computer chose Scissors`;
    }

    // Show the overlay
    overlay.style.display = 'block';
}

// Function to hide the computer's choice overlay
function hideComputerChoice() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
// Event listeners for each option
options.forEach((option) => {
    option.addEventListener('click', function () {
        const playerChoice = this.id;
        const computerOptions = ['rock', 'paper', 'scissors'];
        const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
        showComputerChoice(computerChoice);

        const result = playRound(playerChoice, computerChoice);
        console.log(`Player chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`);

        // Update the scoreboard display (you can implement this part)
        document.querySelector('.player-score .score-text').textContent = `${playerScore}`;
        document.querySelector('.computer-score .score-text').textContent = `${computerScore}`;
        setTimeout(hideComputerChoice,2000);
    });
   
});
