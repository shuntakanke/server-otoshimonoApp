const passport = require('passport');

const router = require('express').Router();


router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
  })
);

router.get('/google/redirect', passport.authenticate('google'));

router.get('/logout',(req, res) => {
  req.logout();
  res.redirect('/current')
});






module.exports = router;