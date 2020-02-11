module.exports = function (req, res, next) {
  if (req.method === 'POST') {
      switch(req.path) {
        case '/posts':
          req.body = {
            src: "https://i.imgur.com/ZCyPUUt.jpg",
            userId: req.body.userId,
            upvote: false,
            report: false,
            bookmarked: false
          }
          break;
        default:
      }
  }
  next()
}
