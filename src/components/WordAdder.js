import React from "react";

class WordAdder extends React.Component {
  state = {
    hiddenWordInput: ""
  };

  render() {
    const { hiddenWordInput } = this.state;
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="hiddenWord">Enter Hidden Word </label>
        <input
          className="input-box"
          type="text"
          name="hiddenWord"
          onChange={this.handleChange}
        />
        <button type="submit">Submit Word!</button>
      </form>
    );
  }

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    const { hiddenWordInput } = this.state;
    this.props.addHiddenWord(hiddenWordInput);
    console.log(this.props);
  };

  handleChange = event => {
    const { value } = event.target;
    //console.log(value);
    this.setState({ hiddenWordInput: value });
  };
}

export default WordAdder;
