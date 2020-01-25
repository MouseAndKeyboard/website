import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  Collapse,
  NavbarToggler
} from 'reactstrap'
import Link from 'next/link'
import HeaderItem, { HeaderItemContent } from './HeaderItem'

const Header = () => {
  const [open, setOpen] = useState(false)

  const links: HeaderItemContent[] = [
    { href: '/about', text: 'About' },
    { href: '/events', text: 'Events' },
    { href: '/projects', text: 'Projects' }
  ]
  return (
    <Navbar
      dark
      color="dark"
      className="text-white py-3 fixed-top shadow-sm"
      expand="md"
    >
      <Container>
        <Nav className="justify-content-start">
          <NavbarToggler
            className="mr-4 d-block d-md-none d-flex align-items-center pl-0 border-0"
            onClick={() => setOpen(!open)}
          >
            <i className="fas fa-bars text-white" />
          </NavbarToggler>
          <Link href="/">
            <NavbarBrand className="mr-md-5 pr-md-5">
              <code className="font-weight-bold" style={{ cursor: 'pointer' }}>
                cfc
              </code>
            </NavbarBrand>
          </Link>
          <Collapse navbar isOpen={open}>
            <Nav navbar>
              {links.map(link => (
                <HeaderItem item={link} key={link.text} />
              ))}
            </Nav>
          </Collapse>
        </Nav>

        <a
          href="https://cfcmemberships.getqpay.com/"
          className="btn btn-outline-secondary"
          role="button"
        >
          Membership
        </a>
      </Container>
    </Navbar>
  )
}

export default Header
