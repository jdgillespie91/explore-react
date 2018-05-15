import React from 'react'
import {connect} from 'react-redux'
import Clock from './Clock'

const mapStateToProps = state => ({
  time: state.ui.time % 24
})

const ClockContainer = props => <Clock {...props} />

export default connect(mapStateToProps)(ClockContainer)
