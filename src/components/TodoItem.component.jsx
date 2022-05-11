import React, { useState } from "react";

import axios from "axios";

import { Row, Col, Button, Modal, Form } from "react-bootstrap";

const TodoItem = ({ todo }) => {
  const { todoName, todoDescription, id } = todo;

  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({ name: "", description: "" });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput((input) => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const deleteTodo = () => {
    axios
      .delete(`http://localhost:3000/delete-todo/${id}`)
      .then((response) => console.log(response));
  };

  const editTodo = () => {
    axios
      .put(`http://localhost:3000/modify-todo/${id}`, {
        todoName: input.name,
        todoDescription: input.description,
      })
      .then((response) => console.log(response));
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <strong>{todoName}</strong>
        </Col>
        <Col>
          <span>{todoDescription}</span>
        </Col>
        <Col>
          <Button onClick={() => setShowModal(true)}>Edit</Button>
        </Col>
        <Col>
          <Button onClick={deleteTodo}>Delete</Button>
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Edit Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                onChange={inputHandler}
                value={input.name}
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Edit Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                onChange={inputHandler}
                value={input.description}
                placeholder="Description"
              />
            </Form.Group>
            <Button onClick={editTodo}>Edit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default TodoItem;
