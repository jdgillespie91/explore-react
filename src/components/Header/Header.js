import React from 'react'
import PropTypes from 'prop-types'
import styles from './headerStyles'
import {Button} from 'material-ui'

const Header = props => (
  <div style={styles.header}>
    <Button style={styles.button} variant='raised'>quests</Button>
    <Button id='menuButton' style={styles.button} variant='raised' onClick={props.onClick}>menu</Button>
    <Button style={styles.button} variant='raised'>allies</Button>
    <Button style={styles.button} variant='raised'>chat</Button>
  </div>
)

Header.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Header
