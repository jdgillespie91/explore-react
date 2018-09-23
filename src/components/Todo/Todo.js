import React from 'react'
import TodoForm from './TodoForm'

const TitleHeader = ({handleClick}) => <button onClick={handleClick}>Todo</button>

const FormHeader = ({handleSubmit}) => <TodoForm onSubmit={handleSubmit} />

const Todo = ({items, addItem, removeItem, toggle, expanded}) =>
  <div style={{margin: '50px', width: '100px'}}>
    {expanded
      ? <FormHeader handleSubmit={value => { addItem(value); toggle() }} />
      : <TitleHeader handleClick={toggle} />}
    {items.map(item => (
      <li key={item.id}>
        <button onClick={removeItem(item)}>{item.title}</button>
      </li>
    ))}
  </div>

export default Todo
