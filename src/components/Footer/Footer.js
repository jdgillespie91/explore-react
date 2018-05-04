import React from 'react'
import Avatar from '../Avatar'
import Inventory from '../Inventory'
import Stats from '../Stats'
import styles from './footerStyles'

const Footer = () => (
  <div style={styles.footer} >
    <Avatar />
    <Stats />
    <Inventory />
  </div>
)

export default Footer
