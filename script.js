// A Scrambled word gussing game

// Const Variables
const scrambledWord = document.getElementById("scrambledWord");
const hint = document.getElementById("hint");
const timeLeft = document.getElementById("timeLeft");
const answer = document.getElementById("answer");
const refresh = document.getElementById("refresh");
const check = document.getElementById("check");

// Script Helper Valiables
let theWord;
let interval;
let secondsLeft = 30;

// Get a Random Word
function randomWord(){
    random = Math.floor(Math.random() * words.length);
    return words[random];
}

// Set the Word
function setWord(word){

    wordArray = word.toUpperCase().split("");

    for (let i = 0; i < wordArray.length; i++) {
        let random = Math.floor(Math.random() * wordArray.length);

        let temp = wordArray[i];
        
        wordArray[i] = wordArray[random];
        wordArray[random] = temp;
    }
    
    // Set the word
    scrambledWord.innerText = wordArray.join("");
}

// Set the Word and the Hint
function initWord(){
    clearInterval(interval);
    timeLeft.innerText = "30";
    secondsLeft = 30;
    answer.value = "";

    word = randomWord();
    theWord = word["word"].toUpperCase();

    setWord(word["word"]);
    hint.innerText = word["hint"];

    answer.focus();
    setTimer();
}

// GameOver Function
function gameOver(){
    alert(`Game Over!\nCorrect Word is: ${theWord}`);
    initWord();
}

// Set the timer
function setTimer(){
    interval = setInterval(() => {
        secondsLeft -= 1;
        timeLeft.innerText = secondsLeft;
        if (secondsLeft < 0){
            clearInterval(interval);
            gameOver();
        }
    }, 1000);
}

// Set a random word when Window loads
window.addEventListener("load", initWord)


// Refresh Word!
refresh.addEventListener("click", initWord);

// Check if Word is Correct
check.addEventListener("click", () => {
    answerWord = answer.value;

    if ((answerWord.toUpperCase() == theWord)){
        alert("Yay! You Guessed it Right!");
        initWord();
    } else{
        alert("Word is Wrong!");
    }
})

