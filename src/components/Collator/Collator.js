import React from 'react'
import ChipContainer from '../Chip/ChipContainer'

const style = {
  width: '100%',
  height: '100px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '#9b59b6'
}

const Collator = props => {
  if (!props) return <div style={style} />
  if (!props.events) return <div style={style} />

  if (props.events.length < 4) {
    return (
      <div style={style}>
        {props.events.map((event, index) => <ChipContainer key={index} label={event} onDelete={props.onDelete(index)} />)}
      </div>
    )
  }

  return (
    <div style={style}>
      {props.events.slice(0, 3).map((event, index) => <ChipContainer key={index} label={event} onDelete={props.onDelete(index)} />)}
      <ChipContainer key='4' label='...' />
    </div>
  )
}

export default props => <Collator {...props} />
