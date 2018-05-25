import uiReducer from './ui'
import snakeReducer from './snake'

const eventsReducer = (state, action) => {
  console.debug('(events reducer) state:', state)
  console.debug('(events reducer) action:', action)
  switch (action.type) {
    case 'FIRST_ACTION_TYPE':
    case 'SECOND_ACTION_TYPE':
    case 'THIRD_ACTION_TYPE':
      return Object.assign({}, state, {lastEvent: action}, {allEvents: ((state && state.allEvents) || []).concat([action])})
    case 'EVENT_DELETED':
      return Object.assign({}, state, {allEvents: state.allEvents.slice(0, action.index).concat(state.allEvents.slice(action.index + 1))})
    default:
      return state
  }
}

export default (state, action) => {
  console.debug('(root reducer) state:', state)
  console.debug('(root reducer) action:', action)
  return Object.assign(
    {},
    {events: eventsReducer(state && state.events, action)},
    {ui: uiReducer(state.ui, action)},
    {snake: snakeReducer(state.snake, action)}
  )
}
