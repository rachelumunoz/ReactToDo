var React = require('react')
var ReactDOM = require('react-dom')
var {Provider} = require('react-redux')
var { Route, Router, IndexRoute, hashHistory} = require('react-router')

var ToDoApp = require('ToDoApp')

var actions = require('actions')

var store = require('configureStore').configure()
//returns redux store

store.subscribe(()=>{
  console.log('new state', store.getState())
})


//Load Foundation
$(document).foundation()
//app css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Provider store={store}>
    <ToDoApp/>
  </Provider>, 
  document.getElementById('app')
)
    
