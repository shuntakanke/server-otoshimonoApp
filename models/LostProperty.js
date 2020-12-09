const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { Schame } = mongoose; <=distracturing なう　な書き方

const GeoSchema = new Schema({
  type:{
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

const LostPropertySchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  type: {
    type: String,
    required:true
  },
  location: GeoSchema,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = LostProperty = mongoose.model('lost_property', LostPropertySchema);