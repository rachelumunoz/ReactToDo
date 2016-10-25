var React = require('react')

var ToDoList = require('ToDoList')
var AddToDo = require('AddToDo')
var ToDoSearch = require('ToDoSearch')

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Do the dishes'
        }, {
          id: 4,
          text: 'Wash car'
        }
      ]
    }
  },
  handleNewToDo: function(text){
    alert("new to do: " + text)
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function (){
    var {todos} = this.state
    return (
      <div>
          <ToDoSearch onSearch={this.handleSearch}/>
          <ToDoList todos={todos}/>
          <AddToDo onAddToDo={this.handleNewToDo}/>
      </div>
    )
  }
})

module.exports = ToDoApp