var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var ToDoSearch = require('ToDoSearch')

describe('ToDoSearch', ()=>{
  it('should exist',()=>{
    expect(ToDoSearch).toExist()
  })

  it('should call onSearch with entered input text',()=>{
    var searchText = "make a smoothie"
    var spy = expect.createSpy()
    var toDoSeach = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>)

    toDoSeach.refs.searchText.value = searchText
    TestUtils.Simulate.change(toDoSeach.refs.searchText)
    expect(spy).toHaveBeenCalledWith(false, "make a smoothie")
  })

  it('should call onSearch with proper checked value', ()=>{
    var spy = expect.createSpy()
    var toDoSeach = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>)

    toDoSeach.refs.showCompleted.checked = true
    TestUtils.Simulate.change(toDoSeach.refs.showCompleted)
    expect(spy).toHaveBeenCalledWith(true, '')
  })
})