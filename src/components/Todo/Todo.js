import React from 'react'
import TodoForm from './TodoForm'

const TitleHeader = ({handleClick}) => (
  <button id='todo-button' className='list-header-todo' onClick={handleClick}>
    <span id='todo-button-text'>Todo</span>
    <i id='todo-button-icon' className='fas fa-plus' />
  </button>
)

const FormHeader = ({handleSubmit}) => <
  TodoForm onSubmit={handleSubmit} />

const Todo = ({items, addItem, removeItem, toggle, expanded}) =>
  <div id='todo' className='list-todo'>
    {expanded
      ? <FormHeader handleSubmit={value => { addItem(value); toggle() }} />
      : <TitleHeader handleClick={toggle} />}
    {items.map((item, index) => (
      <button id={`todo-item-${index}`} className='list-item-todo' key={item.id} onClick={removeItem(item)}>
        <i id={`todo-item-${index}-icon`} className='fas fa-square list-icon-todo' />
        <span id={`todo-item-${index}-text`}>{item.title}</span>
      </button>
    ))}
  </div>

export default Todo
