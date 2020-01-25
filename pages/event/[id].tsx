import React from 'react'
import { useRouter } from 'next/router'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap'

import events from '../../data/events.json'

export default (props: {}) => {
  const router = useRouter()
  const { id } = router.query

  const event = events[+id]

  return (
    <>
      {style}
      <Jumbotron className="bg-dark text-white d-flex align-items-center rounded-0">
        <Container id="eventContainer">
          <div id="titleContainer">
            <h3 style={{ margin: '3rem 0' }}>
              ./{event.type.charAt(0).toUpperCase() + event.type.substring(1)}
            </h3>
            <h1 style={{ fontSize: 'xxx-large' }}>{event.title}</h1>
          </div>
        </Container>
      </Jumbotron>
    </>
  )
}

const style = (
  <style jsx>
    {`
      #eventContainer {
        width: 90%;
        height: 30vh;
        position: relative;
      }
      div #titleContainer {
        position: absolute;
        bottom: 0;
        display: block;
        word-wrap: break-word;
        width: 40vw;
      }
      h3 
    `}
  </style>
)
