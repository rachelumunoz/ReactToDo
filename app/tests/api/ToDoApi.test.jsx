var expect = require('expect')

var ToDoApi = require('ToDoApi')

describe('ToDoApi', ()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos')
  })

  it('should exist',()=>{
    expect(ToDoApi).toExist()
  })

  describe('set todos',()=>{
    it('should set valid todos array',()=>{
      var todos =[{
          id: 2,
          text: 'test test test',
          completed: false
      }]
      ToDoApi.setTodos(todos)
      var actualTodos = JSON.parse(localStorage.getItem('todos'))

      expect(actualTodos).toEqual(todos)
    })

    it('should not set an invalid todo',()=>{
      var badTodo = { text: 'todo this'}
      ToDoApi.setTodos(badTodo)

      expect(localStorage.getItem('todos')).toBe(null)
    })
  })

  describe('getTodos',()=>{
    it('should return an empty array for bad localStorage data',()=>{
      var actualTodos = ToDoApi.getTodos()
      expect(actualTodos).toEqual([])
    })
    it('should return toDo if valid array in localStorage',()=>{
      var todos =[{
          id: 2,
          text: 'test test test',
          completed: false
      }]
      localStorage.setItem('todos', JSON.stringify(todos))
      var actualTodos = ToDoApi.getTodos()

      expect(actualTodos).toEqual(todos)
    })
  })

  describe('filter todos', ()=>{
    var todos = [{
      id: 1,
      text: 'something here',
      completed: true
    },{
      id: 2,
      text: 'something else',
      completed: false
    },{
      id: 3,
      text: 'somalia',
      completed: true
    }]
    it('shoud return all items if showCompleted is true',()=>{
      
      var filteredTodos = ToDoApi.filterTodos(todos, true, "")
      expect(filteredTodos.length).toBe(3)
    })
    it('shoud return items not completed if showCompleted is false',()=>{
      
      var filteredTodos = ToDoApi.filterTodos(todos, false, "")
      expect(filteredTodos.length).toBe(1)
    })

    it('should sort by completed status',()=>{
      var filteredTodos = ToDoApi.filterTodos(todos, true, "")

      expect(filteredTodos[0].completed).toBe(false)
    })

    it('shoud filter todos by searchText',()=>{
      
      var filteredTodos = ToDoApi.filterTodos(todos, true, "some")
      expect(filteredTodos.length).toBe(2)
    })

    it('shoud return all todos if searchText is empty',()=>{
      
      var filteredTodos = ToDoApi.filterTodos(todos, true, "")
      expect(filteredTodos.length).toBe(3)
    })
  })
})












