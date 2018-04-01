import React from 'react'
import {connect} from 'react-redux'
import App from './App'

const mapStateToProps = state => ({
  isActive: state.ui.state === 'active'
})

const AppContainer = props => <App {...props} />

export default connect(mapStateToProps)(AppContainer)
