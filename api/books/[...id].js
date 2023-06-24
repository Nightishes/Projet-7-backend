const app = require('../../app')
const route = require('../../routes/books')

app.use("/api/books/:id/", route)

module.exports = app;