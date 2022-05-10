import React from "react";
import "./TodoItem.style.css";
import axios from "axios";

const TodoItem = ({ todo }) => {
  const { todoName, todoDescription } = todo;
  const deleteTodo = () => {};
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
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
