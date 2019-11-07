import React from "react";
import "./App.css";
import WordAdder from "./components/WordAdder";
import LetterAdder from "./components/LetterAdder";

class App extends React.Component {
  state = {
    hiddenWord: "",
    guess: ''
  };

  render() {
    console.log(this.state, 'app state!!!!')
    return (
      <div className="App">
        <header className="App-header">
          <h1>Our hangman game</h1>
          <WordAdder addHiddenWord={this.addHiddenWord} />
          <LetterAdder addLetter={this.addLetter} />
        </header>
      </div>
    );
  }

  addLetter = letter => {
    this.setState(() => {
      return { guess: letter }
    })
  }

  addHiddenWord = word => {
    this.setState(() => {
      return { hiddenWord: word }
    })
  };
}

export default App;
