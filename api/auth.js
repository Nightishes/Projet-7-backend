const app = require('../app')
const route = require('../routes/users')

app.use("/api", route)

module.exports = app;