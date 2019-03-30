import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap'
import Clients from '../components/Clients'
import Services from '../components/Services'
import constants from '../data/constants.json'
import Projects from '../components/Projects'

export default (props: {}) => (
  <div>
    <Jumbotron className='hero bg-dark text-white d-flex align-items-center rounded-0'>
      <Container>
        {style}
        <h1 className='mb-4'>./Projects</h1>
      </Container>
    </Jumbotron>
    <Container>
      <Projects />
    </Container>
  </div>
)

const style = (
  <style jsx>{`
    .hero {
      margin-top: 4.5rem;
      padding: 6.6rem 0;
    }
  `}</style>
)
