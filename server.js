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

app.use(express.json({ extended: false}));

app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] 
  })
);
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth',authRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/lost_property',lostPropertyRoutes);

// test script   ⬇️ whether every request have user or not
app.get('/api/current_user' ,(req,res) => {
  res.json(req.user);
});

// test script ⬇️ after /auth/logout ,redirect to this path
app.get('/yooo' ,(req,res) => {
  res.send('yoooooo');
});


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



const PORT = process.env.PORT || 5000;
app.listen(PORT);
