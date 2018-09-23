import React from 'react'

const Done = ({items}) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <div style={{margin: '50px', width: '100px'}}>
      <span>Done</span>
      {items.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  </div>
)

export default Done
