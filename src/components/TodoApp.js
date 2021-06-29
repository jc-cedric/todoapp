import React from 'react'
import TodoList from './TodoList'
import { Button, Form } from 'react-bootstrap'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="new-todo">
            <Form.Label>What needs to be done?</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Add task"
              onChange={this.handleChange}
              value={this.state.text} 
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Add #{this.state.items.length + 1}
          </Button>
        </Form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default TodoApp