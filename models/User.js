const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const { Schame } = mongoose; <=distracturing なう　な書き方


const UserSchema = new Schema({
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

module.exports = User = mongoose.model('user', UserSchema);