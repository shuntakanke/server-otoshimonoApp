const router = require('express').Router();


router.get('/',(req, res) => {
  res.send('This is <get> /lost_property  /  Route!');
});

router.post('/',(req, res) => {
  res.send('This is <post> /lost_property  /  Route!');
});

router.get('/:id',(req, res) => {
  res.send('This is <get> /lost_property  /:id  Route!');
});

router.put('/:id',(req, res) => {
  res.send('This is <put> /lost_property  /:id  Route!');
}); 


router.delete('/:id',(req, res) => {
  res.send('This is <delete> /lost_property  /:id  Route!');
});


router.get('/users/:id',(req, res) => {
  res.send('This is <get> /lost_property  /users/:id  Route!');
});






module.exports = router;