import React from 'react'
import PropTypes from 'prop-types'
import styles from './menuStyles'
import {Button} from 'material-ui'

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
      <Button style={styles.wideButton} variant='raised' onClick={props.onClick}>return to game</Button>
    </div>
  </div>
)

Menu.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Menu
