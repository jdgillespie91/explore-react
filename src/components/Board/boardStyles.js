const app = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const board = {
  width: '300px',
  height: '300px',
  padding: '2px',
  backgroundColor: '#1abc9c',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap'
}

const inactiveCell = {
  width: '26px',
  height: '26px',
  margin: '2px',
  backgroundColor: 'white'
}

export default {
  app,
  board,
  inactiveCell
}
