import React, { Component } from "react";

class Todoform extends Component {
  state = { text: "" };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text.trim() === "") {
      alert("Enter Something");
      return;
    }

    this.props.onSubmit({
      id: Date.now(),
      text: this.state.text.trim(),
      completed: false,
      display: "",
    });
    this.setState({ text: "" });
    event.target.blur();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Enter Todo"
          />
          <button className="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Todoform;
