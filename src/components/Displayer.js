import React from "react";
import placeholder from "./images/placeholder.png";
import hangman0 from "./images/hangman0.png";
import hangman1 from "./images/hangman1.png";
import hangman2 from "./images/hangman2.png";
import hangman3 from "./images/hangman3.png";
import hangman4 from "./images/hangman4.png";
import hangman5 from "./images/hangman5.png";
import hangman6 from "./images/hangman6.png";
import hangman7 from "./images/hangman7.png";
import hangman8 from "./images/hangman8.png";
import hangman9 from "./images/hangman9.png";
import hangman10 from "./images/hangman10.png";

let hangmanArray = [];
let imgsource = placeholder;
let incorrectGuesses = -1;
let insertedLetterCount = 0;

const Displayer = props => {
  // console.log("displayer", props);
  const { hiddenWord, guessArray, guess } = props.appState;

  let hiddenWordArray = hiddenWord.split("");

  if (guessArray.length === 0) {
    hangmanArray = hiddenWordArray.map(letter => "_");
  }
  // console.log(guessArray);

  let isGuessCorrect = false;
  for (let i = 0; i < hiddenWordArray.length; i++) {
    if (hiddenWordArray[i] === guess) {
      hangmanArray[i] = guess;
      insertedLetterCount++;
      isGuessCorrect = true;
      console.log(insertedLetterCount);
      if (insertedLetterCount === hiddenWordArray.length) {
        alert("you win, congratulations!");
      }
    }
    if (i === hiddenWordArray.length - 1) {
      if (!isGuessCorrect) {
        incorrectGuesses++;
      }
      if (isGuessCorrect) {
        //alert("correct guess!");
      }
    }
  }

  if (incorrectGuesses === 0) {
    imgsource = hangman0;
  }
  if (incorrectGuesses === 1) {
    imgsource = hangman1;
  }
  if (incorrectGuesses === 2) {
    imgsource = hangman2;
  }
  if (incorrectGuesses === 3) {
    imgsource = hangman3;
  }
  if (incorrectGuesses === 4) {
    imgsource = hangman4;
  }
  if (incorrectGuesses === 5) {
    imgsource = hangman5;
  }
  if (incorrectGuesses === 6) {
    imgsource = hangman6;
  }
  if (incorrectGuesses === 7) {
    imgsource = hangman7;
  }
  if (incorrectGuesses === 8) {
    imgsource = hangman8;
  }
  if (incorrectGuesses === 9) {
    imgsource = hangman9;
  }
  if (incorrectGuesses === 10) {
    imgsource = hangman10;
    alert("you lose lol!");
  }

  let displayString = hangmanArray.join(" ");
  let guessString = guessArray.join(" ");
  return (
    <p>
      {displayString}
      <br />
      <br />
      <br /> Your Guesses: {guessString}
      <br />
      <br />
      <img src={imgsource} alt="woops" />
    </p>
  );
};

export default Displayer;
