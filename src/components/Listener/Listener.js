import React from 'react'
import Chip from 'material-ui/Chip'

const style = {
  width: '100%',
  height: '100px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '#3498db'
}

const Listener = props => {
  return props.label ? <div style={style}><Chip label={props.label} /></div> : <div style={style} />
}

export default props => <Listener {...props} />
