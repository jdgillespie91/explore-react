import React from 'react'
import ButtonContainer from '../Button/ButtonContainer'

const style = {
  width: '100%',
  height: '100px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '#1abc9c'
}

const firstAction = {
  type: 'FIRST_ACTION_TYPE',
  message: 'Some message!'
}

const secondAction = {
  type: 'SECOND_ACTION_TYPE',
  message: 'Some message!'
}

const thirdAction = {
  type: 'THIRD_ACTION_TYPE',
  message: 'Some message!'
}

const Dispatcher = props => (
  <div {...props} style={style} >
    <ButtonContainer onClick={props.onClick(firstAction)} variant='raised' color='secondary' >first action</ButtonContainer>
    <ButtonContainer onClick={props.onClick(secondAction)} variant='raised' color='secondary' >second action</ButtonContainer>
    <ButtonContainer onClick={props.onClick(thirdAction)} variant='raised' color='secondary' >third action</ButtonContainer>
  </div>
)

export default props => <Dispatcher {...props} />
