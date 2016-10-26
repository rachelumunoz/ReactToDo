var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var ToDoList = require('ToDoList')
var ToDo = require('ToDo')

describe('ToDoList', ()=>{
  it('should exist', ()=>{
    expect(ToDoList).toExist()
  })

  it('should render one ToDo component for each ToDo item', ()=>{
    var todos = [{
      id: 1,
      text: 'something to do'
    }, {
      id: 2,
      text: 'Make dinner'
    }]
    var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>)
    var todosComponenets = TestUtils.scryRenderedComponentsWithType(toDoList, ToDo)

    expect(todosComponenets.length).toBe(todos.length)
  })

  it('should render a message if there are no to dos', ()=>{
    var todos = []
    var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>)

    var $el = $(ReactDOM.findDOMNode(toDoList))

    expect($el.find('.container__message').length).toBe(1)
  })
})