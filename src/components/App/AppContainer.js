import React from 'react'
import {connect} from 'react-redux'
import constants from '../../constants'
import App from './App'
import actions from './appActions'

const mapStateToProps = state => ({
  isActive: state.ui.state === constants.active
})

const mapDispatchToProps = dispatch => ({
  focus: unit => () => dispatch(actions.focus(unit))
})

const AppContainer = props => <App {...props} />


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
