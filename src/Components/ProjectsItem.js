import React, { Component } from 'react';

class ProjectsItem extends Component {

  handleDelete(id){

    this.props.deleteItem(id);
  }
  render() {
    return (
        <li className="project">
        {this.props.project.title} - {this.props.project.category} - <a href="#"  onClick={this.handleDelete.bind(this, this.props.project.id)}>Delete</a>
        </li>
    );
  }
}

export default ProjectsItem;
