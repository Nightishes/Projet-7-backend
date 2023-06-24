const app = require('../../../app')
const route = require('../../../routes/books')

app.use("/api/books/:id/rating/", route)

module.exports = app;