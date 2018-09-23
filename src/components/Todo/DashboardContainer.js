import React, {Component} from 'react'
import Dashboard from './Dashboard'
import {randomAlphanumeric} from './randomStrings'

const initialState = {
  todo: [
  ],
  done: [
  ]
}

class DashboardContainer extends Component {
  constructor (props) {
    super(props)
    this.state = initialState
    this.startItem = this.startItem.bind(this)
    this.finishItem = this.finishItem.bind(this)
  }

  startItem (title) {
    this.setState(state => (
      {
        todo: [...state.todo, {id: randomAlphanumeric(), title: title}],
        done: state.done
      }
    ))
  }

  finishItem (item) {
    return () => this.setState(state => (
      {
        todo: state.todo.filter(i => i.id !== item.id),
        done: [...state.done, item]
      }
    ))
  }

  render () {
    return <Dashboard
      todoItems={this.state.todo}
      doneItems={this.state.done}
      addItem={this.startItem}
      removeItem={this.finishItem}
    />
  }
}

export default DashboardContainer
