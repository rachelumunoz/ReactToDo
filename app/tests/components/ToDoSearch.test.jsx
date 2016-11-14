var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

import {ToDoSearch} from 'ToDoSearch'

describe('ToDoSearch', ()=>{
  it('should exist',()=>{
    expect(ToDoSearch).toExist()
  })

  it('should dispatch setSearchText on input change',()=>{
    var searchText = "make a smoothie"
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
    var spy = expect.createSpy()
    var toDoSeach = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>)

    toDoSeach.refs.searchText.value = searchText
    TestUtils.Simulate.change(toDoSeach.refs.searchText)
    expect(spy).toHaveBeenCalledWith(action)
  })

  it('should dispatch toggleShowCompleted when checkbox checked', ()=>{
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var spy = expect.createSpy()
    var toDoSeach = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>)

    toDoSeach.refs.showCompleted.checked = true
    TestUtils.Simulate.change(toDoSeach.refs.showCompleted)
    expect(spy).toHaveBeenCalledWith(action)
  })
})