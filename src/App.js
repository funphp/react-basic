import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects'
import Todos from './Components/Todos'
import AddProjects from './Components/AddProject'
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects: [],
            todos : []
        }
    }

    getProjects(){
        this.setState({
            projects:[
            {
                id: uuid.v4(),
                title: 'Business Website',
                category : 'Web Design'
            },
            {
                id: uuid.v4(),
                title: 'Social App',
                category : 'Mobile Developemnt'
            },
            {
                id: uuid.v4(),
                title: 'Shopping Cart',
                category : 'Web Development'
            }
            ]
        });
    }

    getTodos(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/todos',
            dataTaype: 'json',
            method: 'GET',
            success: function(data){
                this.setState({
                    todos:data
                })
            }.bind(this),
            error: function(xhr, state, error) {
                console.log(error);
            }
        });
    }
    //life cyle method
    componentWillMount(){
        this.getProjects();
        this.getTodos();

    }

    componentDidMount(){
        this.getTodos();

    }
    handleProject(project){
        let projects = this.state.projects;
        projects.push(project);
        this.setState({
            projects:projects
        });

    }

    handleDelete(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x=>x.id === id);
        projects.splice(index,1);
        this.setState({
            projects:projects
        });
    }
    handleDeleteTodo(id) {
        let todos = this.state.todos;
        let index = todos.findIndex(x=>x.id === id);
        todos.splice(index,1);
        this.setState({
            todos:todos
        });
    }

  render() {
    return (
      <div className="App">
       <AddProjects addProject={this.handleProject.bind(this)}/>

        <Projects  Projects={this.state.projects} deleteProject={this.handleDelete.bind(this)}/>
        <Todos  Todos={this.state.todos} deleteTodo={this.handleDeleteTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
