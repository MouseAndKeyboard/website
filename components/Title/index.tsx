import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import style from './style'

export default ({ children }: { children: String }) => (
  <div>
    <Jumbotron className="hero bg-dark text-white d-flex align-items-center rounded-0">
      <Container>
        {style}
        <h1 className="mb-4">{children}</h1>
      </Container>
    </Jumbotron>
  </div>
)
