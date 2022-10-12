const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/SDC', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }
)
  .then(()=> {
    console.log('connected to mongodb');
  })
  .catch(err => console.log(err));

// // Schema is a blueprint of data
const photosSchema = new mongoose.Schema({
  id: Number,
  url: String
});

const resultsSchema = new mongoose.Schema({
  review_id: Number,
  rating: Number,
  summary: String,
  recommend: Boolean,
  response: String,
  body: String,
  date: Date,
  reviewer_name: String,
  helpfulness: Number,
  photos: [photosSchema]
});

const reviewsSchema = new mongoose.Schema({
  product_id: Number,
  results: [resultsSchema]
});

// // then use this schema to create a model
let Review = mongoose.model('Review', reviewsSchema, "NewReviews");

let getReviews = (product_id) => {
  return Review.find({product_id: product_id});
};

// TODO: Still working on the postReview
let postReview = (product_id, rating, summary, body, recommend, name, email, photos, characteristics) => {
  let newReview = {
    product_id: product_id,
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    reviewer_name: name,
    email: email,
    photos: [],
    characteristics: {}
  };
  console.log('reach to db.js postReview function');
  return Review.create(newReview);
};


const ratingsSchema = new mongoose.Schema({
  1: Number,
  2: Number,
  3: Number,
  4: Number,
  5: Number,
});

const recommendedSchema = new mongoose.Schema({
  0: Number,
  1: Number
});

const characteristicsSchema = new mongoose.Schema({
  Comfort: {
    id: Number,
    value: Number
  },
  Fit: {
    id: Number,
    value: Number
  },
  Length: {
    id: Number,
    value: Number
  },
  Quality: {
    id: Number,
    value: Number
  }
});

const metaSchema = new mongoose.Schema({
  product_id: Number,
  ratings: ratingsSchema,
  recommended: recommendedSchema,
  characteristics: characteristicsSchema
});

let Meta = mongoose.model('Meta', metaSchema, "MetaData");

let getMetaData = (product_id) => {
  return Meta.find({product_id: product_id});
};

module.exports = {
  getReviews,
  postReview,
  getMetaData
};