const app = require('../app')
const route = require('../routes/users')

app.use("/api/auth", route)

module.exports = app;