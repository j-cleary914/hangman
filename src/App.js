import React from "react";
import "./App.css";
import WordAdder from "./components/WordAdder";
import LetterAdder from "./components/LetterAdder";
import Displayer from "./components/Displayer";

class App extends React.Component {
  state = {
    hiddenWord: "",
    guess: "",
    guessArray: []
  };

  render() {
    //console.log(this.state, "app state!!!!");
    return (
      <div className="App">
        <header className="App-header">
          <h1>Our hangman game</h1>
          <WordAdder addHiddenWord={this.addHiddenWord} />
          <LetterAdder addLetter={this.addLetter} />
        </header>
        <main>
          <Displayer appState={this.state} />
        </main>
      </div>
    );
  }

  addLetter = letter => {
    this.setState(currentState => {
      return {
        guess: letter,
        guessArray: [...currentState.guessArray, letter]
      };
    });
  };

  addHiddenWord = word => {
    this.setState({ hiddenWord: word });
  };
}

export default App;
