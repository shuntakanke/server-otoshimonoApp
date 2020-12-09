const passport = require('passport');

const router = require('express').Router();

router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
  console.log(req.user)
  res.redirect(`/users/${req.user._id}`)
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