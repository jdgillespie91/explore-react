import React from 'react'
import {connect} from 'react-redux'
import constants from '../../constants'
import Repeater from '../../lib/Repeater'
import actions from '../Time/timeActions'
import Time from './Time'

let time

const mapStateToProps = state => ({
  isActive: state.ui.state === constants.active
})

const mapDispatchToProps = dispatch => ({
  tick: () => dispatch(actions.tick)
})

const TimeContainer = props => {
  if (!time) {
    time = new Repeater(props.tick)
    time.start()
  } else {
    props.isActive ? time.resume() : time.pause()
  }

  return <Time />
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeContainer)
