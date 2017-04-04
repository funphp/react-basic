import React, { Component } from 'react';
import uuid from 'uuid';

class AddProjects extends Component {

    constructor(){
        super();
        this.state ={
            newProject : {}
        }
    }

    static defaultProps = {
        catgories : ['Web Design', 'Mobile Development', 'Web Development']
    }
    handleSubmit(e){

        e.preventDefault();
        if(this.refs.title.value==='') {
            alert("Title is Required")
        } else{
            this.setState({
                newProject:{id: uuid.v4(), title:this.refs.title.value, category:this.refs.category.value}
            }, function(){
                this.props.addProject(this.state.newProject)
            });

        }

    }

  render() {
    let categoryOptions = this.props.catgories.map(category=>{
        return(<option key={category} value={category}>{category}</option>)
    })

    return (
        <div>
        <h2>Add Project</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label>
                <input type="text" ref="title" placeholder="Project Title"/>
            </div>
            <div>
                <label>Category</label>
               <select ref="category">
                    {categoryOptions}
               </select>
            </div>
            <div>
            <input type="submit" value="Save"/>
            </div>

          </form>
      </div>
    );
  }
}

AddProjects.propTypes = {
    catgories : React.PropTypes.array,
    addProject : React.PropTypes.func
}

export default AddProjects;
