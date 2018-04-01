import React from 'react'
import { connect } from 'react-redux'
import Collator from './Collator'

const deserialise = type => {
  const string = type.split('_').join(' ').toLowerCase()
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const mapDispatchToProps = dispatch => ({
  onDelete: index => () => dispatch({ type: 'EVENT_DELETED', index: index })
})

const mapStateToProps = state => ({
  events: state && state.events && state.events.allEvents && state.events.allEvents.map(event => deserialise(event.type))
})

const CollatorContainer = props => <Collator {...props} />

export default connect(mapStateToProps, mapDispatchToProps)(CollatorContainer)
