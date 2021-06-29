import React from 'react'
import { Table } from 'react-bootstrap'

class TodoList extends React.Component {
  render() {
    return (
      <Table striped bordered hover className="mt-10">
        <thead>
          <tr>
            <th>#</th>
            <th>Task label</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.text}</td>
            </tr>
          ))}
          
        </tbody>
      </Table>
    );
  }
}

export default TodoList