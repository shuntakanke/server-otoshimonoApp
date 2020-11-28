const passport = require('passport');

const router = require('express').Router();

router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
  res.redirect('/current_user');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
  })
);

router.get('/logout',(req, res) => {
  req.logout();
  res.redirect('/current')
});






module.exports = router;