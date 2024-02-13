const express = require("express");
const cors = require("cors");
const session = require('express-session');
const app = express();
const passport = require("passport");
require("./config/Googleauth");

if (process.env.NODE_ENV !== 'production')
    require("dotenv").config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173', // Adjust the origin to match your client application
    credentials: true
}));
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.use(passport.initialize());
app.use(passport.session());

// Include authentication routes
const routes = require("./routes/GoogleOauth");
app.use("/", routes);

module.exports = app;
