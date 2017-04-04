import React, { Component } from 'react';
import ProjectsItem from './ProjectsItem';

class Projects extends Component {

  deleteItem(id) {
    this.props.deleteProject(id);
  }
  render() {
    let projectItem;
    if(this.props.Projects) {
        projectItem = this.props.Projects.map(project => {
            return(<ProjectsItem key={project.title} project={project} deleteItem={this.deleteItem.bind(this)} />);
        })
    }
    return (
      <div className="Projects">
        {projectItem}

      </div>
    );
  }
}

Projects.propTypes = {
    projects : React.PropTypes.array,
    deleteItem : React.PropTypes.func
}

export default Projects;
