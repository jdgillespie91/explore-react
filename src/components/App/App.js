import {Button} from 'material-ui'
import PropTypes from 'prop-types'
import React from 'react'
import constants from '../../constants'
import Footer from '../Footer'
import Header from '../Header'
import Menu from '../Menu'
import styles from './appStyles'

const units = [
  constants.peon,
  constants.grunt,
  constants.stronghold,
  constants.empty
]

const App = props => (
  <div>
    {!props.isActive && <Menu />}
    <div style={props.isActive ? styles.activeApp : styles.pausedApp}>
      <Header />
      {units.map(unit => <Button id={`${unit}Component`} variant='raised' onClick={props.focus(unit)}>{unit}</Button>)}
      <Footer />
    </div>
  </div>
)

App.propTypes = {
  isActive: PropTypes.bool.isRequired,
  focus: PropTypes.func.isRequired
}

export default App
