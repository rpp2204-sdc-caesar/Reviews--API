const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/reviews');

// Schema is a blueprint of data
const reviewsSchema = new mongoose.Schema({
  product_id: Number,
  rating: Number,
  summary: String,
  response: String,
  body: String,
  date: Date,
  reviewer_name: String,
  helpfulness: Number,
  recommend: Boolean,
  photos: [{
    id: Number,
    url: String
  }]
});

// then use this schema to create a model
const Reviews = mongoose.model('Review', reviewsSchema);

// const review = new Reviews ({

// });
const metaSchema = new mongoose.Schema({
  ratings: {
    1: Number,
    2: Number,
    3: Number,
    4: Number,
    5: Number,
  },
  recommended: {
    true: Number,
    false: Number
  },
  characteristics: {
    size: Number,
    width: Number,
    comfort: Number,
    fit: Number,
    length: Number,
    quality: Number
  }
});
