import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import actions from './headerActions'

const mapDispatchToProps = dispatch => ({
  pause: () => dispatch(actions.pause)
})

const HeaderContainer = props => <Header {...props} />

export default connect(undefined, mapDispatchToProps)(HeaderContainer)
