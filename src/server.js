require('dotenv').config()
const express = require('express')
const http = require('http')
const next = require('next')
const postsAPI = require('./api/posts-api')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
  dir: './src',
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(postsAPI)
  console.log('postAPI registered...')

  // handling everything else with Next.js
  server.get('*', handle)

  http.createServer(server).listen(process.env.PORT || 5000, () => {
    // eslint-disable-next-line no-console
    console.info(`listening on port ${process.env.PORT || 5000}`)
  })
})
