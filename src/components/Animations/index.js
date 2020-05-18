import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`s
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 10s linear infinite;
    padding: 2rem 1rem;
    font-size: 5em;
`

const Animations = () =>
    <Rotate>&lt; 💅 &gt;</Rotate>

export default Animations