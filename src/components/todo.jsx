import React, { Component } from "react";

export default (props) => {
  const classes = props.completed ? "tasksdone" : "tasks";
  const styles = { display: props.display };
  return (
    <div style={styles} className="todo">
      <div className={classes}>
        <input onClick={props.toggle} type="checkbox" />
        <div>{props.text}</div>
      </div>
      <button onClick={props.delete}>Remove</button>
    </div>
  );
};
