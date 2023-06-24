const app = require('../app')
const route = require('../routes/users')

app.use("/api/auth/login", route)

module.exports = app;