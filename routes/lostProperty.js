const router = require('express').Router();
const requireLogin = require('../middlewares/requireLogin');
const LostProperty = require('../models/LostProperty');
const User = require('../models/User');



router.post('/', requireLogin, async(req, res) => {
  try {

    const newLostProperty = new LostProperty ({
      user: req.user._id,
      type: req.body.type,
      location: {
        type: "point",
        coordinates: [req.body.lng, req.body.lat]
      },
      address: req.body.address
    });

    const lostProperty = await newLostProperty.save();

    res.send(lostProperty);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
  
});

router.get('/', async(req, res) => {
  try {
    const lostProperty = await LostProperty.find().populate('user',['username','imageUrl']);
    res.json(lostProperty);

  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
    
  }
});


router.get('/:id',  requireLogin, async(req, res) => {
  try {
    const lostProperty = await LostProperty.findById(req.params.id);
    res.json(lostProperty);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
    
  }
});

router.put('/:id',(req, res) => {
  res.send('This is <put> /lost_property  /:id  Route!');
}); 


router.delete('/:id',(req, res) => {
  res.send('This is <delete> /lost_property  /:id  Route!');
});


router.get('/users/:id', requireLogin, async(req, res) => {
  try {
    const lostProperty = await LostProperty.find({user: req.params.id});
    res.json(lostProperty);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});






module.exports = router;