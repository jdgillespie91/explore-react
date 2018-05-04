import React from 'react'
import styles from './footerStyles'
import Avatar from '../Avatar'
import Stats from '../Stats'
import Inventory from '../Inventory'

const Footer = () => (
  <div style={styles.footer} >
    <Avatar />
    <Stats />
    <Inventory />
  </div>
)

export default Footer
