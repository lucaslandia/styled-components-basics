import React from 'react'
import Link from './Link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    display: inline-block;
    color: palevioletred;
    font-weight: bold;
    margin: 1em 0;
`

const StylingAnyComponent = () =>
    <div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
    </div>

export default StylingAnyComponent