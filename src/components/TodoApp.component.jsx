import React from "react";

import "./TodoApp.style.css";

import TodoItem from "./TodoItem.component";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
    };
  }
  inputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  addTodo = () => {
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, this.state.input],
      };
    });
    this.setState({
      input: "",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="add-todo">
          <input
            type="text"
            placeholder="Add Todo"
            onChange={this.inputHandler}
            value={this.state.input}
          />
          <button onClick={this.addTodo}>Add Todo</button>
        </div>
        <div className="todos">
          {this.state.todos.map((todo, index) => {
            return <TodoItem key={index} todo={todo} />;
          })}
          {this.state.todos.length === 0 && (
            <div className="center">Nothing</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default TodoApp;
