import React from 'react'
import MaterialButton from 'material-ui/Button'

const style = {
  margin: '10px',
  padding: '10px'
}

const Button = props => <MaterialButton {...props} style={style} />

export default props => <Button {...props} />
