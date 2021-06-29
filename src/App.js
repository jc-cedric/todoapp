import TodoApp from './components/TodoApp.js'
 import { Container, Row } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <div className="App">
          <TodoApp/>
        </div>
      </Row>
    </Container>
  );
}

export default App;
