import React from "react";

class LetterAdder extends React.Component {
  state = {
    letterInput: "",
    guessesArray: []
  };

  render() {
    const { letterInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="letter">Enter Letter </label>
        <input
          className="input-box"
          type="text"
          name="letter"
          onChange={this.handleChange}
          value={letterInput}
          maxLength="1"
        />
        <button type="submit">Submit Guess!</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { letterInput, guessesArray } = this.state;

    if (!guessesArray.includes(letterInput)) {
      this.props.addLetter(letterInput);

      this.setState(currentState => {
        let newArray = [...currentState.guessesArray];
        newArray.push(currentState.letterInput);
        return { guessesArray: newArray };
      });

      this.setState(() => {
        return { letterInput: "" };
      });
    } else alert("!!!!!!Repeat Letter Submitted!!!!!");
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ letterInput: value });
  };
}

export default LetterAdder;
