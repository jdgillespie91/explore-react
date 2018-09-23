import React from 'react'
import Done from './Done'
import TodoContainer from './TodoContainer'

const Dashboard = ({todoItems, doneItems, addItem, removeItem}) => (
  <div id='dashboard' className='dashboard'>
    <TodoContainer items={todoItems} addItem={addItem} removeItem={removeItem} />
    <Done items={doneItems} />
  </div>
)

export default Dashboard
