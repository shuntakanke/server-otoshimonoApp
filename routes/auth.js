const router = require('express').Router();


router.get('/google',(req, res) => {
  res.send('This is <get>  /auth  /google Route!');
});

router.get('/google/redirect',(req, res) => {
  res.send('This is <get>  /auth  /google/redirect Route!');
});

router.get('/logout',(req, res) => {
  res.send('This is <get>  /auth  /logout Route!');
});





module.exports = router;