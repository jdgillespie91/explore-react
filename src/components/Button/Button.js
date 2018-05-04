import MaterialButton from 'material-ui/Button'
import React from 'react'

const style = {
  margin: '10px',
  padding: '10px'
}

const Button = props => <MaterialButton {...props} style={style} />

export default props => <Button {...props} />
