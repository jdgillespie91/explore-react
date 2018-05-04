const menu = {
  width: '280px',
  height: '400px',
  backgroundColor: '#34495e',
  zIndex: '1',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const menuContainer = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const wideButton = {
  width: '96%',
  marginTop: '1%',
  marginBottom: '1%'
}

const wideButtonFiller = {
  ...wideButton,
  height: '10%'
}

const narrowButtonContainer = {
  ...wideButton,
  display: 'flex',
  justifyContent: 'space-between'
}

const narrowButton = {
  width: '49%'
}

export default {
  menu,
  menuContainer,
  wideButton,
  wideButtonFiller,
  narrowButtonContainer,
  narrowButton
}
