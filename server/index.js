require('dotenv').config();
const express = require('express');
const session = require('express-session');
const checkForSession = require('./middlewares/checkForSession');
const authController = require('./controllers/authController');
const swagController = require('./controllers/swagController');
const cartController = require('./controllers/cartController');
const searchController = require('./controllers/searchController');
// const users = require('./models/users');

const app = express();

let {SERVER_PORT, SESSION_SECRET} = process.env;

app.use(express.json());
app.use(session({
   secret: SESSION_SECRET,
   resave: false,
   saveUninitialized: true
}));
app.use(checkForSession)

app.get('/api/swag', swagController.read);
// app.get('/api/users', (req, res) => {
//    res.json(users);
// })

app.post('/api/login', authController.login);
app.get('/api/user', authController.getUser);
app.post('/api/register', authController.register);
app.post('/api/signout', authController.signout);

app.post('/api/cart/checkout', cartController.checkout);
app.post('/api/cart/:id', cartController.add);
app.delete('/api/cart/:id', cartController.delete);

app.get('/api/search/:category', searchController.search);

app.listen(SERVER_PORT, () => console.log (`Server listening on ${SERVER_PORT}`));

