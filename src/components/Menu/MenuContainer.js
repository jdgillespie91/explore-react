import React from 'react'
import {connect} from 'react-redux'
import Menu from './Menu'
import actions from './menuActions'

const mapDispatchToProps = dispatch => ({
  resume: () => dispatch(actions.resume)
})

const MenuContainer = props => <Menu {...props} />

export default connect(undefined, mapDispatchToProps)(MenuContainer)
