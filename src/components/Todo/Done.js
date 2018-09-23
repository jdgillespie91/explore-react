import React from 'react'

const Done = ({items}) => (
  <div id='done' className='list-done'>
    <div id='done-header' className='list-header-done'>Done</div>
    {items.map((item, index) => (
      <div id={`done-item-${index}`} className='list-item-done' key={item.id}>
        <i id={`done-item-${index}-icon`} className='fas fa-check list-icon-done' />
        <span id={`done-item-${index}-text`}>{item.title}</span>
      </div>
    ))}
  </div>
)

export default Done
