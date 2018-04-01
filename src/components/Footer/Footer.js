import React from 'react'

const style = {
  width: '100%',
  height: '200px',

  position: 'fixed',
  bottom: '0',

  backgroundColor: 'coral'
}

const Footer = props => <div {...props} style={style} />

export default () => <Footer />
