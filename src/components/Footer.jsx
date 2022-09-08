import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

export default function AppFooter() {
  const rowStyle = { width: '100%', fontSize: '0.9em' }
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Row style={rowStyle} noGutters className="align-items-center border-top py-2">
            <Col xs={12} md={6} className="text-muted">
              © 2021 Sergei Liski. All Rights Reserved.
            </Col>
            <Col xs={12} md={6}>
              <Nav className="mr-auto justify-content-end">
                <Link href="/">
                  <a className="nav-link">Privacy</a>
                </Link>
                <Link href="/">
                  <a className="nav-link">Terms</a>
                </Link>
                <Link href="/">
                  <a className="nav-link">Feedback</a>
                </Link>
                <Link href="/">
                  <a className="nav-link">Support</a>
                </Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}
