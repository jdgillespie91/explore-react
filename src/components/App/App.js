import React from 'react'
import PropTypes from 'prop-types'
import styles from './appStyles'
import Menu from '../Menu'
import Header from '../Header'

const App = props => (
  <div>
    {!props.isActive && <Menu />}
    <div style={props.isActive ? styles.activeApp : styles.pausedApp}>
      <Header />
    </div>
  </div>
)

App.propTypes = {
  isActive: PropTypes.bool.isRequired
}

export default App
