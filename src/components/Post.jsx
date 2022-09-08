import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ReactStoreIndicator from 'react-score-indicator'
import Flair from './Flair'
import moment from 'moment'
import InfoBox from './InfoBox'

export default function Post({ post }) {
  const [hovered, setHovered] = useState(false)
  const toggleHover = () => setHovered(!hovered)
  const cardStyle = {
    marginTop: '15px',
    borderRadius: '10px',
    marginRight: '20px',
    cursor: 'pointer',
  }
  const cardRowStyle = {
    // height: '150px',
  }
  const cardColStyle = {
    height: '100%'
  }
  const imageStyle = {
    borderRadius: '10px 10px 0 0',
  }
  const scoreImageStyle = {
    width: '80%'
  }
  const footerStyle = {
    borderRadius: '0 0 10px 10px',
  }
  const scoreWindowStyle = {
    borderLeft: '1px solid #dfdfdf',
    // height: '100%',
    textAlign: 'center'
  }
  const scoreIndicatorStyle = {
    top: '55%',
    msTransform: 'translateY(-50%)',
    transform: 'translateY(-50%)'
  }
  return (
    <Card
      style={cardStyle}
      className={hovered ? 'shadow-sm' : ''}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Row noGutters style={cardRowStyle}>
        <Col xs={12} md={10} style={cardColStyle}>
          <Card.Body>
            <Card.Title>{post.message}</Card.Title>
            <Flair readOnly={true} text={post.flair_text} color={post.flair_color}></Flair>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={footerStyle} className="bg-white">
            <small className="text-muted">Posted by u/{post.author.name} {moment.unix(post.created).fromNow()}</small>
            <InfoBox text={`Account created ${moment.unix(post.author.created).fromNow()}`} color={'#74b9ff'}></InfoBox>
          </Card.Footer>
        </Col>
        <Col xs={12} md={2} style={scoreWindowStyle}>
          <Card.Body style={cardColStyle}>
            <ReactStoreIndicator
              style={scoreIndicatorStyle}
              value={post.score}
              maxValue={100}
              width={100}
              lineWidth={10}
            />
          </Card.Body>
        </Col>
      </Row>

    </Card>
  )
}
