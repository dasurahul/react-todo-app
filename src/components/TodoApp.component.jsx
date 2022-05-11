import React, { useState, useEffect } from "react";

import TodoItem from "./TodoItem.component";

import axios from "axios";

import { Form, Button, ListGroup } from "react-bootstrap";

const TodoApp = () => {
  const [input, setInput] = useState({ name: "", description: "" });
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((input) => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const getData = () => {
    axios
      .get("http://localhost:3000/show-todos")
      .then((response) => setTodos(response.data));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  });

  const addTodo = () => {
    axios
      .post("http://localhost:3000/add-todo", {
        todoName: input.name,
        todoDescription: input.description,
        id: Math.random(),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Add Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={input.name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Add Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
            value={input.description}
          />
        </Form.Group>
        <Button onClick={addTodo} className="mb-3">
          Add Todo
        </Button>
      </Form>
      <ListGroup className="todos">
        {todos.map((todo, index) => {
          return (
            <ListGroup.Item key={index}>
              <TodoItem todo={todo} />
            </ListGroup.Item>
          );
        })}
        {todos.length === 0 && <div className="text-center">Nothing</div>}
      </ListGroup>
    </React.Fragment>
  );
};

export default TodoApp;
