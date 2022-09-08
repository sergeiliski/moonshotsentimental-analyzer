import React from 'react'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Row, Spinner } from 'react-bootstrap'
import Post from './Post'
import Link from './Link'
import Flairs from './Flairs'
import { ArrowRepeat } from 'react-bootstrap-icons';
import { useState } from 'react';
import Loader from './Loader'

export default function Posts(props) {
  const listGroupStyle = { justifyContent: 'start' }
  const pageStyle = { minHeight: '100vh' }
  const flairsStyle = { justifyContent: 'flex-end' }
  const refreshButtonStyle = { padding: '5px 7px', width: '35px' }
  const refreshButtonStyleMobile = { padding: '5px 7px', width: '100%' }

  const flairsData = [
    { text: 'Meme/shitcoin', color: '#ff66ac', selected: true },
    { text: 'Low MCAP coin', color: '#15c784', selected: true },
    { text: 'New coin/token', color: '#ffd635', selected: true },
    { text: 'Early development', color: '#0dd3bb', selected: true }
  ]

  const [
    flairs,
    setFlairsData
  ] = useState(flairsData);

  const [
    posts,
    setPostsData
  ] = useState(props.posts);

  async function onRefresh() {
    setPostsData(null)
    const res = await fetch(`/api/posts`)
    const posts = await res.json()
    const selected = flairs.filter((f) => { return f.selected })
    const selection = selected.map((s) => { return s.text })
    setPostsData(posts.filter((p) => { return selection.includes(p.flair_text) }))
  }

  const RefreshButtonIcon = () => {
    if (posts) {
      return <ArrowRepeat size={20}/>
    } else {
      return <Spinner size="sm" animation="border" />
    }
  }

  const handleCallback = (childData) =>{
    setFlairsData(childData)
  }

  return (
    <div className="bg-light py-5" style={pageStyle}>
      <div className="py-5">
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <h4>r/CryptoMoonShots</h4>
            </Col>
            <Col xs={12} md={8}>
              <Flairs parentCallback={handleCallback} flairs={flairs} style={flairsStyle}/>
            </Col>
            <Col xs={12} md={1}>
              <Button className="d-block d-sm-none" onClick={onRefresh} style={refreshButtonStyleMobile} variant="dark">
                <RefreshButtonIcon></RefreshButtonIcon>
              </Button>
              <Button className="d-none d-sm-block" onClick={onRefresh} style={refreshButtonStyle} variant="dark">
                <RefreshButtonIcon></RefreshButtonIcon>
              </Button>
            </Col>
          </Row>
          {/*  className="flex-md-row" */}
          <ListGroup style={listGroupStyle}>
            {posts && posts.map((post) => (
              <Link key={post._id} to={`/post/${post._id}`}>
                <Post key={post._id} post={post} />
              </Link>
            ))}
            {!posts && [...Array(5)].map(() => (
              <Loader/>
            ))}
          </ListGroup>
        </Container>
      </div>
    </div>
  )
}
