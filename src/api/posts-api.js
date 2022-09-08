const bodyParser = require('body-parser')
const express = require('express')
const snoowrap = require('snoowrap');
const monk = require('monk')

const router = express.Router()

router.use(bodyParser.json())

const TARGET_SUBREDDIT = 'CryptoMoonShots'
const ALLOWED_FLAIRS = ['Meme/shitcoin', 'Low MCAP coin', 'New coin/token', 'Early development']
const SNOOWRAP_CONFIGS = {
  userAgent: 'r/CryptoMoonShots sentiment analysis (by /u/MrKnives)',
  clientId: '-pwWEQaYMw4Ctw',
  clientSecret: '2Wz56NxMjkGhJ34YxZEeQvgx21AXTg',
  refreshToken: '12183321-TxsdiZu1vAiQB3b4Vpl6y5k5uoLqxA'
}
const url = 'localhost:27017/moonshotsentimental'

router.get('/reddit/posts/hot', async (req, res) => {
  try {
    const reddit = new snoowrap(SNOOWRAP_CONFIGS);
    const subreddit = reddit.getSubreddit(TARGET_SUBREDDIT)
    const hot = await subreddit.getHot({ limit: 40 })
    console.log('thot', hot[2])
    console.log('hot', hot['_r']['ratelimitRemaining'])
    const posts = []
    for (const i in hot) {
      const idx = parseInt(i, 10)
      if (Number.isSafeInteger(idx) && !hot[idx].stickied) {
        console.log('i', i)
        const post = hot[idx]
        const expandedPost = await post.expandReplies({ limit: 50, depth: 0 })
        console.log('data:', post['_r']['ratelimitRemaining'])
        const score = Math.floor(Math.random() * 100) + 1
        const comments = []
        for (const j in expandedPost.comments) {
          const jdx = parseInt(j, 10)
          if (Number.isSafeInteger(jdx)) {
            const commentPost = expandedPost.comments[j]
            // const author = commentPost.author.name !== '[deleted]'
            //   ? await commentPost.author.fetch() 
            //   : { name: commentPost.author.name }
            const author = commentPost.author.name !== '[deleted]'
              ? {
                name: commentPost.author.name,
                created: await commentPost.author.created,
                comment_karma: await commentPost.author.comment_karma
              }
              : { name: commentPost.author.name }
            const commentAuthor = author.name !== '[deleted]' ? {
              name: author.name,
              created: author.created,
              comment_karma: author.comment_karma
            } : { name: author.name }
            const comment = {
              post_id: commentPost.id,
              body: post.selftext,
              author: commentAuthor,
              score: commentPost.score,
              up_votes: commentPost.ups,
              down_votes: commentPost.downs,
              upvote_ratio: commentPost.upvote_ratio,
            }
            comments.push(comment)
          }
        }

        // const author = await post.author.fetch()
        const author = {
          name: post.author.name,
          created: await post.author.created,
          comment_karma: await post.author.comment_karma
        }

        posts.push({
          post_id: post.id,
          message: post.title,
          body: post.selftext,
          author: {
            name: author.name,
            created: author.created,
            comment_karma: author.comment_karma
          },
          comments: comments,
          score: score,
          up_votes: post.ups,
          down_votes: post.downs,
          upvote_ratio: post.upvote_ratio,
          flair_text: post.link_flair_text,
          flair_color: post.link_flair_background_color,
          created: post.created
        })
      }
      console.log('for loop')
    }
    const db = monk(url)
    const collection = db.get('posts')
    // fetch -> update old ones and add
    // const posts = await collection.find()
    collection.insert(posts)
    .then(() => db.close())
    .catch((e) => { console.error(e) })
  } catch (error) {
    console.error(error)
  }
})

router.get('/api/posts', async (req, res) => {
  console.log('routerrrr')
  const db = monk(url)
  const collection = db.get('posts')
  const posts = await collection.find()
  console.log('collection:', posts.length)
  return res.send(posts)
})

router.get('/api/post/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const orderedPosts = posts.filter((th) => th._id === id)
  res.send(orderedPosts[0])
})

module.exports = router
