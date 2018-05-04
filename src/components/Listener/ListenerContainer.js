import React from 'react'
import {connect} from 'react-redux'
import Listener from './Listener'

const deserialise = type => {
  const string = type.split('_').join(' ').toLowerCase()
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const mapStateToProps = state => ({
  label: state && state.events && deserialise(state.events.lastEvent.type)
})

const ListenerContainer = props => {
  console.debug('(listener container) props:', props)
  return <Listener {...props} />
}

export default connect(mapStateToProps)(ListenerContainer)
