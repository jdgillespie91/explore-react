import {Button} from 'material-ui'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './headerStyles'

const Header = props => (
  <div style={styles.header}>
    <Button style={styles.button} variant='raised'>quests</Button>
    <Button id='menuButton' style={styles.button} variant='raised' onClick={props.pause}>menu</Button>
    <Button style={styles.button} variant='raised'>allies</Button>
    <Button style={styles.button} variant='raised'>chat</Button>
  </div>
)

Header.propTypes = {
  pause: PropTypes.func.isRequired
}

export default Header
