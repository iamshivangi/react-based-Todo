import React, { Component } from "react";
import Todoform from "./Todoform";
import Todo from "./todo";
import todo from "./todo";
import FilterForm from "./filterForm";

class TodoContainer extends Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };
  toggle = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    });
  };

  delete = (todoId) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== todoId),
    });
  };

  filtertodo = (text) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.text.includes(text) && !("hidden" in todo)) {
          return { ...todo, display: "" };
        } else {
          return { ...todo, display: "none" };
        }
      }),
    });
  };

  hideCompleted = (checked) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.completed && checked) {
          return { ...todo, display: "none", hidden: true };
        } else {
          return { ...todo, display: "" };
        }
      }),
    });
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="FilterContainer">
          <FilterForm onFilter={this.filtertodo} onHide={this.hideCompleted} />
        </div>

        <h1>
          You have{" "}
          {this.state.todos.filter((todo) => todo.completed === false).length}{" "}
          todo left
        </h1>

        <div className="todo-container">
          {this.state.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                toggle={() => this.toggle(todo.id)}
                delete={() => this.delete(todo.id)}
                display={todo.display}
              />
            );
          })}
          <Todoform onSubmit={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
