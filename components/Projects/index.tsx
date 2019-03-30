import React from 'react'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'
import projects from '../../data/projects.json'

export default () => {
  return (
    <Row className='justify-content-center'>
      {projects.map(project => (
        <Col
          xs={12}
          md={6}
          key={project.name}
          className='align-items-center justify-content-center mb-5 px-4'
        >
          <Link href={project.purl}>
            <a className='text-decoration-none'>
              <img
                src={project.logo}
                alt={project.client}
                className='img-fluid w-100 d-block align-self-center'
              />
              <i
                className='fas fa-laptop-code text-dark mx-2 mt-2'
                style={{ fontSize: '1.75rem' }}
              />
              <h4 className='font-weight-bold d-inline-block mx-1 text-align-bottom text-dark'>
                {project.name}
              </h4>
            </a>
          </Link>
        </Col>
      ))}
    </Row>
  )
}
