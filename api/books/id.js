const app = require('../../app')
const route = require('../../routes/books')

app.use("/api/books/", route)

module.exports = app;