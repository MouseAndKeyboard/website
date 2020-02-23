
import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

interface HeroProps {
    title: string
}

const Hero = (props: HeroProps) => {
  return (
    <>
      {style}
      <Jumbotron className='bg-dark text-white d-flex align-items-center rounded-0'>
        <Container style={{ width: '90%' }}>
          <h1>{props.title}</h1>
        </Container>
      </Jumbotron>
    </>
  )
}

const style = (
  <style jsx>{`
      .jumbotron {
        margin-top: 64px;
        height: 300px;
        `}
  </style>
)

export default Hero
