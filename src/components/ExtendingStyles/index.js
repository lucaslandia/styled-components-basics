import React from 'react'
import styled from 'styled-components'
import ReversedButton from './ReversedButton'

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: .25em 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
`
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`

const ExtendingStyles = () =>
    <div>
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
        <TomatoButton as="a" href="/">Link with Tomato Button</TomatoButton>
        <Button as={ReversedButton}>Custom Button</Button>
    </div>

export default ExtendingStyles