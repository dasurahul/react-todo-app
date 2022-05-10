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
  componentDidUpdate() {
    axios
      .get("http://localhost:3000/show-todos")
      .then((res) => this.setState({ todos: res.data }));
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  addTodo = () => {
    axios
      .post("http://localhost:3000/add-todo", {
        todoName: this.state.name,
        todoDescription: this.state.description,
        id: Math.random(),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    console.log(this.state.todos);
    return (
      <React.Fragment>
        <div className="add-todo">
          <input
            name="name"
            type="text"
            placeholder="Add Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            name="description"
            type="text"
            placeholder="Add Description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <button onClick={this.addTodo}>Add Todo</button>
        </div>
        <div className="todos">
          {this.state.todos.map((todo, index) => {
            return (
              <TodoItem
                key={index}
                todo={todo}
                name={this.state.name}
                description={this.state.description}
              />
            );
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
