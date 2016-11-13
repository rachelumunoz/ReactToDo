var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var {ToDo} = require('ToDo')

describe('ToDo', ()=>{
  it('should exist', ()=>{
    expect(ToDo).toExist()
  })

  it('should dispatch TOGGLE_TODO action on click', ()=>{
    var toDoData = {
      id: 99,
      text: 'Write another test',
      completed: true
    }
    var spy = expect.createSpy()
    var todo = TestUtils.renderIntoDocument(<ToDo key={toDoData.id}  {...toDoData} dispatch={spy}/>)

    var $el = $(ReactDOM.findDOMNode(todo))
    TestUtils.Simulate.click($el[0])
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: toDoData.id
    })
  })
})