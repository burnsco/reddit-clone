import React from 'react'
import styled from '@xstyled/styled-components'

const Container = styled.div`
  background: white;
`
const PageTitle = styled.h1`
  color: orange;
`

function TestPage() {
  return (
    <Container>
      <PageTitle>Cache</PageTitle>
    </Container>
  )
}

export default TestPage
