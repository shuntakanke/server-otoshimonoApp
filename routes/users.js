const router = require('express').Router();


router.post('/',(req, res) => {
  res.send('This is <post> /users  /  Routes!');
});

router.get('/:id', (req, res) => {
  res.send('This is <get> /users  /:id  Routes');
});

router.delete('/:id', (req, res) => {
  res.send('This is <delete> /users  /:id  Routes');
});






module.exports = router;