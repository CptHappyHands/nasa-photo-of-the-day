import React from 'react'
import styled from 'styled-components'

const StyledExplanation = styled.div`
&:hover {
    transform: scale(1.1);
}
`

export default function paragraph ({ explanation }) {
    return (
    <StyledExplanation>
    <p>{explanation}</p>;
    </StyledExplanation>
    )
}