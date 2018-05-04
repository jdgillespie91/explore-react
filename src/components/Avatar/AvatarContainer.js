import React from 'react'
import {connect} from 'react-redux'
import Avatar from './Avatar'

const mapStateToProps = state => ({
  focus: state.ui.focus
})

const AvatarContainer = props => <Avatar {...props} />

export default connect(mapStateToProps)(AvatarContainer)
