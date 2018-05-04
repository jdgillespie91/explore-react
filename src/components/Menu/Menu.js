import {Button} from 'material-ui'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './menuStyles'

const Menu = props => (
  <div style={styles.menuContainer}>
    <div style={styles.menu}>
      <Button style={styles.wideButton} variant='raised'>save game</Button>
      <Button style={styles.wideButton} variant='raised'>load game</Button>
      <Button style={styles.wideButton} variant='raised'>options</Button>
      <div style={styles.narrowButtonContainer}>
        <Button style={styles.narrowButton} variant='raised'>help</Button>
        <Button style={styles.narrowButton} variant='raised'>tips</Button>
      </div>
      <Button style={styles.wideButton} variant='raised'>end game</Button>
      <div style={styles.wideButtonFiller} />
      <Button id='returnToGameButton' style={styles.wideButton} variant='raised' onClick={props.resume}>return to game</Button>
    </div>
  </div>
)

Menu.propTypes = {
  resume: PropTypes.func.isRequired
}

export default Menu
