var React = require('react')
var moment = require('moment')
var ToDo = React.createClass({
  render: function(){
    var {text, id, completed, createdAt, completedAt } = this.props
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
      <div onClick={()=>{
        this.props.onToggle(id)
      }}>
        <input type="checkbox" checked={completed}/>
         <p>{text}</p> 
         <p>{renderDate()}</p>  
      </div>
    )
  }
})

module.exports = ToDo