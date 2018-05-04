import React from 'react'
import {connect} from 'react-redux'
import Dispatcher from './Dispatcher'

const mapDispatchToProps = dispatch => ({
  onClick: action => () => {
    console.debug('(dispatcher container) dispatching:', action)
    dispatch(action)
  }
})

const DispatcherContainer = props => <Dispatcher {...props} />

export default connect(undefined, mapDispatchToProps)(DispatcherContainer)
