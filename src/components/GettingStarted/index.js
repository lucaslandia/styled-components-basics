import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  border-radius: 10px;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const GettingStarted = () =>
    <Wrapper>
        <Title>Getting started with <br /> Styled Components</Title>
    </Wrapper>

export default GettingStarted