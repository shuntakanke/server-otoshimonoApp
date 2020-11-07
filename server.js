const express = require('express');
const connectDB = require('./services/db');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const lostPropertyRoutes = require('./routes/lostProperty');


require('./services/passport');

connectDB();

const app = express();

app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] 
  })
);
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth',authRoutes);
app.use('/users',usersRoutes);
app.use('/lost_property',lostPropertyRoutes);

// test script   ⬇️ whether every request have user or not
app.get('/current_user' ,(req,res) => {
  res.send(req.user);
});
// test script ⬇️ after /auth/logout ,redirect to this path
app.get('/current' ,(req,res) => {
  res.send('yoooo');
});



const PORT = process.env.PORT || 5000;
app.listen(PORT);
