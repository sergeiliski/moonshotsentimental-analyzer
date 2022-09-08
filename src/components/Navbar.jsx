import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Logo from './Logo'
import Link from './Link'

export default function AppNavbar() {
  const navbarStyle = {}

  return (
    <Navbar bg="light" expand="lg" variant="light" style={navbarStyle}>
      <Navbar.Brand>
        <Link to="/">
          <Logo />
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto d-none d-lg-block px-2">
        <Link className="nav-link"to="/">
          Home
        </Link>
      </Nav>
      <Nav className="mr-auto d-none d-lg-block px-2">
        <Link className="nav-link" to="/share-post">
          About
        </Link>
      </Nav>
      <Nav className="mr-auto d-none d-lg-block px-2">
        <Form inline>
          <FormControl xs={8} type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto d-none d-xs-block">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav>
        <Nav className="mr-auto d-none d-xs-block">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Nav>
      </Navbar.Collapse>
      <Nav className="mr-auto d-none d-lg-block">
        <Link className="nav-link" to="/">
          Sign in
        </Link>
      </Nav>
      <Nav className="mr-auto d-none d-lg-block">
        <Link to="/">
          <Button variant="primary">Sign up</Button>
        </Link>
      </Nav>
    </Navbar>
  )
}
