import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    padding: .5em;
    margin: .5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    text-align: center;
`

const PassedProps = () =>
    <div>
        <Input defaultValue="Input" type="text" />
        <Input defaultValue="Yet another input" type="text" inputColor="rebeccapurple" />
    </div>

export default PassedProps