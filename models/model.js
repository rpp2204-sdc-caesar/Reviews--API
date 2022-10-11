module.exports = mongoose => {
  const reviewsSchema = mongoose.Schema({
    product_id: Number,
    results: [{
      review_id: Number,
      rating: Number,
      summary: String,
      recommend: Boolean,
      response: String,
      body: String,
      date: Date,
      reviewer_name: String,
      helpfulness: Number,
      photos: [{
        id: Number,
        url: String
      }]
    }]
  });

  // reviewsSchema.method("toJSON", function() {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // });

  const Reviews = mongoose.model('reviews', reviewsSchema);
  return Reviews;
};