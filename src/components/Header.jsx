import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="title">
          <h1>To do App</h1>
        </div>
        <div className="subtitle">
          <h2>What do you need to do</h2>
        </div>
      </header>
    );
  }
}

export default Header;
