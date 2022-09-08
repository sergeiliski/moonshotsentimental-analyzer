import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import fetch from 'isomorphic-fetch'
import Button from 'react-bootstrap/Button'
import Posts from '../components/Posts'
import Flairs from '../components/Flairs'
import { isMobile, BrowserView, MobileView } from 'react-device-detect';

function Index(props) {
  const { posts } = props

  console.log('posts', posts)

  const bannerStyle = { minHeight: '300px' }
  const infoStyle = { height: '100px' }
  const contStyle = { height: '100%' }
  const rowStyle = { height: '100%', justifyContent: 'space-between' }
  return (
    <>
      <Row noGutters style={bannerStyle}>
        <Col className="bg-primary">
          <Container style={contStyle}>
            <Row style={rowStyle} noGutters className="align-items-center">
              <Col xs={12} md={12} lg={6} xl={5}>
                <div className="py-5 py-lg-0 d-none d-sm-block">
                  <h1 className="text-white font-weight-bold">Moonsentimental</h1>
                  <p className="text-white-50 mb-4 lead">
                    Natural language analysis of r/CryptoMoonShot
                  </p>
                </div>
                <div className="py-5 py-lg-0 d-block d-sm-none">
                  <h1 className="text-white text-center font-weight-bold">Moonsentimental</h1>
                  <p className="text-white-50 text-center mb-4 lead">
                    Natural language analysis of r/CryptoMoonShot
                  </p>
                </div>
              </Col>
              <Col className="text-right d-none d-sm-block" xs={12} md={12} lg={6} xl={5}>
                <img alt="" width="300px" src="http://31.media.tumblr.com/503c429bd64dbd4ec762b661d02ad05a/tumblr_mzxvn2SX741t5zfylo1_500.gif" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row noGutters>
        <Col style={infoStyle} className="py-4 shadow-sm" />
      </Row>
      <Posts posts={posts} />
    </>
  )
}

Index.getInitialProps = async ({ req }) => {
  console.log('Calling this twice???')
  const baseURL = req ? `${req.protocol}://${req.get('Host')}` : ''
  console.log('/api/posts', `${baseURL}/api/posts`)
  const res = await fetch(`${baseURL}/api/posts`)
  console.log('res', await fetch('http://localhost:5000/api/posts'))
  return {
    posts: await res.json(),
  }
}

export default Index
