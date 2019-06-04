require('dotenv').config();
const express = require('express');
const session = require('express-session');

const app = express();

let {SERVER_PORT, SESSION_SECRET} = process.env;

app.use(express.json());

app.use(session({
   secret: SESSION_SECRET,
   resave: false,
   saveUninitialized: true
}));






app.listen(SERVER_PORT, () => console.log (`Server listening on ${SERVER_PORT}`));

