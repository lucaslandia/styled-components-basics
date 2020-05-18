import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background: ${props => props.primary ? 'palevioletred' : 'white'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
    font-size: 2em;
    margin: 1em;
    padding: .25em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`

const AdaptingBasedOnProps = () =>
    <div>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
    </div>

export default AdaptingBasedOnProps