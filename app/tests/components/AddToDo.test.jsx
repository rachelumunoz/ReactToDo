var expect = require('expect')
var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var $ = require('jQuery')

var {AddToDo} = require ('AddToDo')

describe('AddToDo',()=>{
  it('should exist', ()=>{
    expect(AddToDo).toExist()
  })

  it('should dispatch AddToDo when valid todo text', ()=>{
    var toDoText = "Peel bananas"
    var action = {
      type: "ADD_TODO",
      text: toDoText
    }
    var spy = expect.createSpy()
    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addToDoForm))
    
    addToDoForm.refs.todotext.value = toDoText
    
    TestUtils.Simulate.submit($el.find('form')[0])
    expect(spy).toHaveBeenCalledWith(action)
  })

  it('should not dispatch AddToDo when invalid todo text', ()=>{
    var toDoText = ""
    var spy = expect.createSpy()
    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addToDoForm))
    
    addToDoForm.refs.todotext.value = toDoText
    
    TestUtils.Simulate.submit($el.find('form')[0])
    expect(spy).toNotHaveBeenCalled()
  })
})