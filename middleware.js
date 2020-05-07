module.exports = function (req, res, next) {
  switch(req.method) {
    case 'POST':
      if (req.path === '/posts'){
        req.body = {
          src: "https://i.imgur.com/ZCyPUUt.jpg",
          userId: req.body.userId,
          upvote: false,
          report: false,
          bookmarked: false
        }
      } else if (req.path.includes('bookmark')) {
        const { posts } = require('./db.json');
        const id = parseInt(req.path.split('/')[2])
        const post = posts.find(post => post.id === id);
        req.body = { ...post, ...{ bookmarked: true } }

        // proxy request
        req.method = 'PUT'
        req.url = `/posts/${id}`
      } else if (req.path === '/signup') {
        req.body = {
          id: Math.random().toString(),
          email: req.body.email
        }
      } else if (req.path === '/login') {
        req.body = {
          id: Math.random().toString(),
          email: req.body.email
        }
      }
    case 'DELETE':
      if (req.path.includes('bookmark')) {
        const { posts } = require('./db.json');
        const id = parseInt(req.path.split('/')[2])
        const post = posts.find(post => post.id === id);
        req.body = { ...post, ...{ bookmarked: false } }

        // proxy request
        req.method = 'PUT'
        req.url = `/posts/${id}`
      }
    default:
      next();
  }

}
