var React = require('react')
import ToDo from 'ToDo'
var {connect} = require('react-redux')

export var ToDoList = React.createClass({
  render: function(){
    var {todos} = this.props
    var renderTodos = () => {
      if(todos.length === 0){
        return (
          <p className="container__message">Add some todos!</p>
        )
      }
      return todos.map((todo)=>{
        return (
          <ToDo key={todo.id} {...todo} />
        )
      }) 
    }

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
})

//mapStateToProps
export default connect(
  (state)=>{
    return {
      todos: state.todos
    }
  }
  )(ToDoList)