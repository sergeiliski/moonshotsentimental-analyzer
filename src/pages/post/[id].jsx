import React from 'react'
// import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import fetch from 'isomorphic-fetch'

function Post(props) {
  const { post } = props
  // const router = useRouter()
  // const { id } = router.query
  return (
    <>
      <Row noGutters>
        <Col className="bg-primary">{post.message}</Col>
      </Row>
    </>
  )
}

Post.getInitialProps = async ({ req, query }) => {
  try {
    const baseURL = req ? `${req.protocol}://${req.get('Host')}` : ''
    const response = await fetch(`${baseURL}/api/post/${query.id}`)
    const data = await response.json()
    return {
      post: data,
    }
  } catch (error) {
    return error
  }
}

export default Ad
