import React, {Component} from 'react'
import Todo from './Todo'

class TodoContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {expanded: false}
    this.toggle = this.toggle.bind(this)
  }

  componentDidUpdate () {
    const form = document.getElementById('todoForm')
    if (form) {
      form.focus()
    }
  }

  toggle () {
    this.setState(state => ({expanded: !state.expanded}))
  }

  render () {
    return (
      <Todo
        items={this.props.items}
        addItem={this.props.addItem}
        removeItem={this.props.removeItem}
        toggle={this.toggle}
        expanded={this.state.expanded}
      />
    )
  }
}

export default TodoContainer
