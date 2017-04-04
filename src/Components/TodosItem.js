import React, { Component } from 'react';

class TodosItem extends Component {

  handleDelete(id){

    this.props.deleteTodo(id);
  }
  render() {
    return (
        <li className="project">
        {this.props.todo.title} - <a href="#"  onClick={this.handleDelete.bind(this, this.props.todo.id)}>Delete</a>
        </li>
    );
  }
}

export default TodosItem;
