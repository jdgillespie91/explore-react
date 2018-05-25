import React from 'react'

const Snake = props =>
  (
    <div style={{padding: '30px'}}>
      <div>{props.direction}</div>
      <div>{`${props.position[0].x}, ${props.position[0].y}`}</div>
      <div>{`${props.position[1].x}, ${props.position[1].y}`}</div>
      <div>{`${props.position[2].x}, ${props.position[2].y}`}</div>
      <div>{`${props.position[3].x}, ${props.position[3].y}`}</div>
    </div>
  )

export default Snake
