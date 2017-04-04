import React, { Component } from 'react';
import TodosItem from './TodosItem';

class Todos extends Component {

  deleteItem(id) {
    this.props.deleteTodo(id);
  }
  render() {
    let TodoItem;
    if(this.props.Todos) {
        TodoItem = this.props.Todos.map(todo => {
            return(<TodosItem key={todo.id} todo={todo} deleteTodo={this.deleteItem.bind(this)} />);
        })
    }
    return (
      <div className="Todos">
        {TodoItem}

      </div>
    );
  }
}

Todos.propTypes = {
    todos : React.PropTypes.array,
    deleteItem : React.PropTypes.func
}

export default Todos;
