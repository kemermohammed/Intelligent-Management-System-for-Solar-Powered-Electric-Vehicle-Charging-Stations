const express = require('express');
const config = require('./config')
const bodyParser = require('body-parser');
const user = require('./user/controller')
const car = require('./cars/controller')
const {passport:passport} = require('./passport')
const cors = require('cors');
const { connectToDatabase } = require('./config');

const app = express();

// Middleware

app.use(express.json());
app.use(cors())

// Connect to ma config

config.connectToDatabase()

// Routes
app.post('/signUp',user.register)
app.post('/signIn',user.login)
app.post('./signIn','./signIn/createCar',car)

// google auth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  user.sendToken, 
  (req, res) => {
    // Successful authentication, redirect to the dashboard or homepage
    res.redirect('/dashboard');
  }
);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

