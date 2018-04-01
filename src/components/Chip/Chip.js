import React from 'react'
import MaterialChip from 'material-ui/Chip'

const style = {
  margin: '5px'
}

const Chip = props => <MaterialChip {...props} style={style} />

export default props => <Chip {...props} />
