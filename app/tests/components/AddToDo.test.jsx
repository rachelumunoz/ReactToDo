var expect = require('expect')
var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var $ = require('jQuery')

var AddToDo = require ('AddToDo')

describe('AddToDo',()=>{
  it('should exist', ()=>{
    expect(AddToDo).toExist()
  })

  it('should call on onAddToDo with valid data', ()=>{
    var spy = expect.createSpy()
    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addToDoForm))
    
    addToDoForm.refs.todotext.value = "Peel bananas"
    
    TestUtils.Simulate.submit($el.find('form')[0])
    expect(spy).toHaveBeenCalledWith("Peel bananas")
  })

  it('should not call on onAddToDo with invalid data', ()=>{
    var spy = expect.createSpy()
    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addToDoForm))
    
    addToDoForm.refs.todotext.value = ""
    
    TestUtils.Simulate.submit($el.find('form')[0])
    expect(spy).toNotHaveBeenCalled()
  })
})