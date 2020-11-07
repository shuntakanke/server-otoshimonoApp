const mongoose = require('mongoose');

const Schame = mongoose.Schema;
// const { Schame } = mongoose; <=distracturing なう　な書き方


const UserScheme = new Schame({
  googleId: { 
    type: String,
    required: true
  },
  username: {
    type: String
  },
  imageUrl: {
    type: String
  }
});

module.exports = User = mongoose.model('user', UserScheme);