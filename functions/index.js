const express = require('express')
const session = require('express-session')
const functions = require("firebase-functions");
const passport = require('passport')
const routes = require('./routes')

const app = express()
app.set('trust proxy', 1)



app.use(session({
    name: 'sid',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(routes)




exports.api = functions.https.onRequest(app);
