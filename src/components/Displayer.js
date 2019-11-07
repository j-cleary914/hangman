import React from "react";

// class Displayer extends React.Component {
//   render() {
//     console.log(this.props);
//     return <p>_ _ _ _ _ _ _ </p>;
//   }
// }

let hangmanArray = [];
const Displayer = props => {
  console.log("displayer", props);
  const { hiddenWord, guessArray, guess } = props.appState;

  let hiddenWordArray = hiddenWord.split("");

  if (guessArray.length === 0) {
    hangmanArray = hiddenWordArray.map(letter => "_");
  }
  console.log(guessArray);

  for (let i = 0; i < hiddenWordArray.length; i++) {
    if (hiddenWordArray[i] === guess) {
      hangmanArray[i] = guess;
    }
  }

  let displayString = hangmanArray.join(" ");
  return <p>{displayString}</p>;
};

export default Displayer;
