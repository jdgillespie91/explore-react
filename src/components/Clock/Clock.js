import PropTypes from 'prop-types'
import React from 'react'
import styles from './clockStyles'

const Clock = props => (
  <div id='clockComponent' style={styles.clock} >{props.time}</div>
)

Clock.propTypes = {
  time: PropTypes.number.isRequired
}

export default Clock
