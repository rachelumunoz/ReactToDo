var React = require('react')

var AddToDo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault()
    console.log('it was submitted!!! kind of')
    var todotext = this.refs.todotext.value
    if (todotext.length > 0){
      this.refs.todotext.value = ''
      this.props.onAddToDo(todotext)
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

module.exports = AddToDo