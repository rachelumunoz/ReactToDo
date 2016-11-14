var React = require('react')
var uuid = require('node-uuid')
var moment = require('moment')

import ToDoList from 'ToDoList'
import AddToDo from 'AddToDo'
import ToDoSearch from 'ToDoSearch'
var ToDoApi = require('ToDoApi')

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: ToDoApi.getTodos()
    }
  },
  componentDidUpdate: function(){
    ToDoApi.setTodos(this.state.todos)
  },
  handleNewToDo: function(text){
    this.setState({
      todos: [
        ...this.state.todos, 
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined 
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  
  render: function (){
    var {todos, showCompleted, searchText} = this.state
    var filteredTodos = ToDoApi.filterTodos(todos, showCompleted, searchText)
    
    return (
      <div>
        <h1 className="page-title">ToDo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <ToDoSearch onSearch={this.handleSearch}/>
              <ToDoList />
              <AddToDo onAddToDo={this.handleNewToDo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})



module.exports = ToDoApp