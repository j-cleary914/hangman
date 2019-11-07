import React from "react";

class WordAdder extends React.Component {
  state = {
    hiddenWordInput: ""
  };

  render() {
    const { hiddenWordInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="hiddenWord">Enter Hidden Word </label>
        <input
          className="input-box"
          type="text"
          name="hiddenWord"
          onChange={this.handleChange}
          value={hiddenWordInput}
        />
        <button type="submit">Submit Word!</button>
      </form>
    );
  }

  handleSubmit = event => {

    event.preventDefault();
    const { hiddenWordInput } = this.state;
    this.props.addHiddenWord(hiddenWordInput);
    this.setState(() => {
      return { hiddenWordInput: '' }
    })
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ hiddenWordInput: value });

  };
}

export default WordAdder;
