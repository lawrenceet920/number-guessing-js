// Ethan Lawrence
// May 24 2024
// Number Guessing

function submitGuess() {
    const guess = +document.getElementById('guess').value;
    // Detects Answer Correctness
    if (guess > magicNumber) {
        document.getElementById('compare').innerHTML = `${guess} is GREATER then the magic number.`;
        document.querySelector('.guesses').innerHTML = `${document.querySelector('.guesses').innerHTML} <div class="js-guess-hi">${guess}</div>`;

    } else if (guess < magicNumber) {
        document.getElementById('compare').innerHTML = `${guess} is LESS then the magic number.`;
        document.querySelector('.guesses').innerHTML = `${document.querySelector('.guesses').innerHTML} <div class="js-guess-low">${guess}</div>`;

    } else if (guess === magicNumber) {
        document.getElementById('compare').innerHTML = 'You Win!';
        document.getElementById('compare').style.background = 'green';
        document.querySelector('.guesses').innerHTML = `${document.querySelector('.guesses').innerHTML} <div class="js-correct-guess">${guess}</div>`;
        
    } else {
        document.getElementById('compare').innerHTML = `${guess} is not a valid guess`;
    }
}
function middleMan() {
    document.getElementById('compare').style.background = 'red';

    if (gCount === 10) {
        document.getElementById('compare').style.background = 'black';
        document.getElementById('compare').innerHTML = `You have run out of guesses. the magic number was: ${magicNumber}`;
    } else {
        gCount++;
        console.log(`Guess #${gCount}: "${+document.getElementById('guess').value}"`)
        submitGuess(magicNumber);
    }
}

const magicNumber = Math.floor(Math.random() * 100) + 1;
console.log (magicNumber + " is the magic number!");

let gCount = 0;
document.querySelector('.guessSubmit').addEventListener('click', middleMan);