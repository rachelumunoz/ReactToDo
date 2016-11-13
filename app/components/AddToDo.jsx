var React = require('react')
var {connect} = require('react-redux')
var actions = require('actions')

export var AddToDo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault()
    console.log('it was submitted!!! kind of')
    var todotext = this.refs.todotext.value
    if (todotext.length > 0){
      this.refs.todotext.value = ''
      // this.props.onAddToDo(todotext)
      var {dispatch} = this.props
      dispatch(actions.addToDo(todotext))
    }else{
      this.refs.todotext.focus()
    }
  },
  render: function(){
    return(
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input ref="todotext" type="text"></input>
          <button className="button expanded" type="submit">Add Item</button>
        </form>
      </div>
      
    )
  }
})

export default connect()(AddToDo)