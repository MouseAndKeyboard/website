import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Title from '../components/Title'
import Projects from '../components/Projects'

export default (props: {}) => (
  <>
    <Title>./Projects</Title>
    <Container>
      <Projects />
    </Container>
  </>
)
