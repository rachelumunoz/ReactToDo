var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')
var {Provider} = require('react-redux')

var configureStore = require('configureStore')
var ToDoApp = require('ToDoApp')
import ToDoList from 'ToDoList'

describe('ToDoApp', ()=>{
  it('should exist', ()=>{
    expect(ToDoApp).toExist()
  })

  it('should render ToDoList', ()=>{
    var store = configureStore.configure()
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ToDoApp/>
      </Provider>
    )

    var toDoApp = TestUtils.scryRenderedComponentsWithType(provider, ToDoApp)[0]
    var toDoList = TestUtils.scryRenderedComponentsWithType(toDoApp, ToDoList)

    expect(toDoList.length).toEqual(1)
  })
})