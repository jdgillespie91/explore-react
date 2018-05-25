import React from 'react'
import {connect} from 'react-redux'
import Repeater from '../../lib/Repeater'
import SnakeTime from './SnakeTime'
import actions from './snakeTimeActions'

let time

const mapDispatchToProps = dispatch => ({
  tick: () => dispatch(actions.tick)
})

const SnakeTimeContainer = props => {
  if (!time) {
    time = new Repeater(props.tick, 150)
    time.start()
  }

  return <SnakeTime />
}

export default connect(undefined, mapDispatchToProps)(SnakeTimeContainer)
