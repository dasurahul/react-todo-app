import React from "react";
import "./TodoItem.style.css";
import axios from "axios";

const TodoItem = ({ todo, name, description }) => {
  const { todoName, todoDescription, id } = todo;
  const deleteTodo = () => {
    axios
      .delete(`http://localhost:3000/delete-todo/${id}`)
      .then((response) => console.log(response));
  };
  const modify = () => {
    axios
      .put(`http://localhost:3000/modify-todo/${id}`, {
        todoName: name,
        todoDescription: description,
      })
      .then((response) => console.log(response));
  };
  return (
    <React.Fragment>
      <div className="todo flex align-items-center gap-small">
        <input type="checkbox" />
        <div>
          <span>
            <strong>{todoName}</strong>
          </span>
          <span>{todoDescription}</span>
        </div>
        <button onClick={modify}>Modify</button>
        <button className="delete" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
