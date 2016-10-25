var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var ToDoApp = require('ToDoApp')

describe('ToDoApp', ()=>{
  it('should exist', ()=>{
    expect(ToDoApp).toExist()
  })

  it('should add todo to the todos state on handleToDo', ()=>{
    var todoText = "Eat a banana"
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>)

    toDoApp.setState({todos: []})
    toDoApp.handleNewToDo(todoText)

    expect(toDoApp.state.todos[0].text).toBe(todoText)
  })
})