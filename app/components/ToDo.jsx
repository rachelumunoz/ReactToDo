var React = require('react')
var moment = require('moment')
var actions = require('actions')
var {connect} = require('react-redux')

export var ToDo = React.createClass({
  render: function(){
    var {text, id, completed, createdAt, completedAt, dispatch } = this.props
    var toDoClassName = completed ? 'todo todo-completed' : 'todo'
    var renderDate = ()=>{
      var message = 'Created at '
      var timeStamp = createdAt
      if (completed){
        message = 'Completed at '
        timeStamp = completedAt
      }
      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a')
    }
    return (
      <div className={toDoClassName} onClick={()=>{
        dispatch(actions.toggleToDo(id))
      }}>
        <div>
           <input type="checkbox" checked={completed}/>
        </div>
         <div>
          <p>{text}</p> 
          <p className="todo-subtext">{renderDate()}</p>  
         </div>
      </div>
    )
  }
})



//connecting ToDo component to store
export default connect()(ToDo)
