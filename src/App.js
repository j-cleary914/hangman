import React from "react";
import "./App.css";
import WordAdder from "./components/WordAdder";

class App extends React.Component {
  state = {
    hiddenWord: ""
  };

  render() {
    console.log(this.state, 'app state')
    return (
      <div className="App">
        <header className="App-header">
          <h1>Our hangman game</h1>
          <WordAdder addHiddenWord={this.addHiddenWord} />
        </header>
      </div>
    );
  }

  addHiddenWord = word => {
    this.setState(() => {
      return { hiddenWord: word }
    })
  };
}

export default App;
