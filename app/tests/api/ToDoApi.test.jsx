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
})












