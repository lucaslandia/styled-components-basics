import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
    type: 'password',
    size: props.size || '1em'    
}))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 5px;
    margin: ${props => props.size};
    padding: ${props => props.size};
`

const AttachingAdditionalProps = () =>
    <div>
        <Input placeholder="A small text input" />
        <br />
        <Input placeholder="A bigger text input" size="2em" />
    </div>

export default AttachingAdditionalProps