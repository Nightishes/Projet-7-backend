const app = require('../app')
const route = require('../routes/users')

app.use("/api/auth/signup", route)

module.exports = app;