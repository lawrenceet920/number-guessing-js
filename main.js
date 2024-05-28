// Ethan Lawrence
// May 24 2024
// Number Guessing
function submitGuess(guess, mNumber) {
    console.log(mNumber + ' ' + guess)
    if (guess > mNumber) {
        document.getElementById('compare').innerHTML = `${guess} is GREATER then the magic number.`;
    } else if (guess < mNumber) {
        document.getElementById('compare').innerHTML = `${guess} is LESS then the magic number.`;
    } else if (guess = mNumber) {
        document.getElementById('compare').innerHTML = 'You Win!';
    } else {
        document.getElementById('compare').innerHTML = `${guess} is not a valid guess`;
    }
}

const magicNumber = Math.floor(Math.random() * 100) + 1;
console.log (magicNumber)

const guess = +document.getElementById('guess').value;
console.log(guess);

document.querySelector('.guessSubmit').addEventListener('click', console.log('Code has been run'));

submitGuess(guess, magicNumber)