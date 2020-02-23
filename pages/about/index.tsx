import React from 'react'
import Hero from '../../components/Hero'
import { Container } from 'reactstrap'

const name = () => {
  return (
    <>
      <Hero title='About' />
      <Container>
        {/* temporary spacer */}
        <div style={{ marginBottom: '80vh' }} />
      </Container>
    </>
  )
}

export default name
