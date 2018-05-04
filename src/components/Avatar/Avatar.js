import PropTypes from 'prop-types'
import React from 'react'
import constants from '../../constants'
import styles from './avatarStyles'

const Avatar = props => (
  props.focus === constants.empty
    ? <div id='avatarComponent' style={styles.avatar} />
    : <div id='avatarComponent' style={styles.avatar} >{props.focus}</div>
)

Avatar.propTypes = {
  focus: PropTypes.string
}

export default Avatar
