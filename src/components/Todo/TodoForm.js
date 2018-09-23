import React, {Component} from 'react'

class TodoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    this.props.onSubmit(this.state.value)
    event.preventDefault()
  }

  render () {
    return (
      <form id='todo-form' onSubmit={this.handleSubmit}>
        <input id='todo-form-input' className='list-form-todo' type='text' value={this.state.value} onChange={this.handleChange} />
      </form>
    )
  }
}

export default TodoForm
