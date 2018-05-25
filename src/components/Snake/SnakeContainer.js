import React from 'react'
import EventListener from 'react-event-listener'
import {connect} from 'react-redux'
import constants from '../../constants'
import Snake from './Snake'

const mapStateToProps = state => ({
  direction: state.snake.direction,
  position: state.snake.position
})

const mapDispatchToProps = dispatch => ({
  keypress: key => () => {
    if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
      return dispatch({type: constants.KEYPRESS, key: key})
    }
  }
})

class SnakeContainer extends React.Component {
  constructor (props) {
    super()
    this.props = props
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress (event) {
    this.props.keypress(event.key)()
  }

  render () {
    return (
      <div>
        <EventListener target='document' onKeyPressCapture={this.handleKeyPress} />
        <Snake {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnakeContainer)
