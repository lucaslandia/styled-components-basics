import React from 'react'
import styled from 'styled-components'
import GettingStarted from './components/GettingStarted'
import AdaptingBasedOnProps from './components/AdaptingBasedOnProps'
import ExtendingStyles from './components/ExtendingStyles'
import StylingAnyComponent from './components/StylingAnyComponent'
import PassedProps from './components/PassedProps'
import AttachingAdditionalProps from './components/AttachingAdditionalProps'
import Animations from './components/Animations'

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`

const App = () =>
  <>
    <Container>
      <GettingStarted />
    </Container>
    <Container>
      <AdaptingBasedOnProps />
    </Container>
    <Container>
      <ExtendingStyles />
    </Container>
    <Container>
      <StylingAnyComponent />
    </Container>
    <Container>
      <PassedProps />
    </Container>
    <Container>
      <AttachingAdditionalProps/>
    </Container>
    <Container>
      <Animations />
    </Container>
  </>

export default App