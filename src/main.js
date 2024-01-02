const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const userRoute = require('./routes/user.route.js')
const authRoute = require('./routes/auth.route.js')
app.use('/api/user', userRoute);
app.use('/api',authRoute )

module.exports=app