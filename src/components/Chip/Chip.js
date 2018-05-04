import MaterialChip from 'material-ui/Chip'
import React from 'react'

const style = {
  margin: '5px'
}

const Chip = props => <MaterialChip {...props} style={style} />

export default props => <Chip {...props} />
