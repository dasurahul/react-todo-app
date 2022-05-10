import React from "react";

import "./TodoApp.style.css";

import TodoItem from "./TodoItem.component";

import axios from "axios";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      name: "",
      description: "",
    };
  }
  nameHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  descriptionHandler = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  addTodo = () => {
    this.setState((state) => {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            todoName: this.state.name,
            todoDescription: this.state.description,
          },
        ],
      };
    });
    axios
      .post("http://localhost:3000/add-todo", {
        todoName: this.state.name,
        todoDescription: this.state.description,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <div className="add-todo">
          <input
            type="text"
            placeholder="Add Name"
            onChange={this.nameHandler}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Add Description"
            onChange={this.descriptionHandler}
            value={this.state.description}
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
