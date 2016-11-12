var React = require('react')
var ReactDOM = require('react-dom')
var { Route, Router, IndexRoute, hashHistory} = require('react-router')

var ToDoApp = require('ToDoApp')

var actions = require('actions')

var store = require('configureStore').configure()
//returns redux store

store.subscribe(()=>{
  console.log('new state', store.getState())
})

store.dispatch(actions.addToDo('understand this stuff'))
store.dispatch(actions.setSearchText('stuff'))
store.dispatch(actions.toggleShowCompleted())


//Load Foundation
$(document).foundation()
//app css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <ToDoApp/>, 
  document.getElementById('app')
)
    
