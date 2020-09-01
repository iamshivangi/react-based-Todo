import React, { Component } from "react";
class FilterForm extends Component {
  state = { text: "" };

  handleFilter = (event) => {
    this.props.onFilter(event.target.value);
  };
  handleHide = (event) => {
    this.props.onHide(event.target.checked);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter something"
          onKeyUp={this.handleFilter}
        />
        <input type="checkbox" onClick={this.handleHide} />
        <label>Hide Completed</label>
      </div>
    );
  }
}

export default FilterForm;
