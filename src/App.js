import TodoApp from "./components/TodoApp.component";

import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <h1 className="text-center">Todo App</h1>
      <TodoApp />
    </Container>
  );
};

export default App;
