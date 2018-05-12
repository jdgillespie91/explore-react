const header = {
  width: '100%',
  height: '70px',
  backgroundColor: '#1abc9c',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const headerSection = {
  height: '100%',
  flex: 1
}

const headerLeft = {
  ...headerSection,

  display: 'flex',
  alignItems: 'center'
}

const headerCenter = {
  ...headerSection,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const headerRight = {
  ...headerSection
}

const button = {
  margin: '10px'
}

export default {
  header,
  headerLeft,
  headerCenter,
  headerRight,
  button
}
