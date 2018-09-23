const app = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const board = {
  width: '600px',
  height: '200px',
  padding: '2px',
  backgroundColor: '#1abc9c',

  display: 'flex',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap'
}

const inactiveCell = {
  width: '8px',
  height: '8px',
  margin: '1px',
  backgroundColor: 'white'
}

export default {
  app,
  board,
  inactiveCell
}
