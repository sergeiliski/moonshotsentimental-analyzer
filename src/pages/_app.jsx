import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../public/styles/styles.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const pageStyle = { minHeight: '100vh' }
    return (
      <>
        <Head>
          <title>r/CryptoMoonShot Sentiment Analyzer</title>
        </Head>
        <Navbar />
        <Row noGutters style={pageStyle}>
          <Col xs={12} md={12} lg={12}>
            <Component {...pageProps} />
          </Col>
        </Row>
        <Footer />
      </>
    )
  }
}

export default MyApp
