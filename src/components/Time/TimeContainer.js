import React from 'react'
import {connect} from 'react-redux'
import constants from '../../constants'
import Repeater from '../../lib/Repeater'
import Time from './Time'

let time

const tick = () => console.log(`tick: ${new Date()}`)

const mapStateToProps = state => {
  return {
    isActive: state.ui.state === constants.active
  }
}

const TimeContainer = props => {
  if (!time) {
    time = new Repeater(tick)
  } else {
    props.isActive ? time.resume() : time.pause()
  }

  return <Time />
}

export default connect(mapStateToProps)(TimeContainer)
