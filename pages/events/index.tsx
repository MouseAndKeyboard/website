import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

import Events from '../../components/Events'

import eventsData from '../../data/events.json'

export default () => (
  <>
    {style}
    <Jumbotron className='bg-dark text-white d-flex align-items-center rounded-0'>
      <Container style={{ width: '90%' }}>
        <h1>Events</h1>
      </Container>
    </Jumbotron>
    <Container>
      <Events type='workshop' direction='right' events={eventsData} />
      <Events type='industry' direction='left' events={eventsData} />
      <Events type='social' direction='right' events={eventsData} />
    </Container>
  </>
)

const style = (
  <style jsx>
    {`
      .jumbotron {
        margin-top: 64px;
        height: 300px;
      }
    `}
  </style>
)
