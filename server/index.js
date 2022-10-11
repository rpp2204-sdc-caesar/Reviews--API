const express = require("express");
const mongoose = require('mongoose');
const { getReviews, postReview } = require("./db.js");
const app = express();

const port = 4000;

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.get('/reviews', (req, res) => {
  const { product_id } = req.query;
  console.log('log product_id here', product_id);
  console.log('log { product_id } here', { product_id });
  getReviews(product_id)
    .then((response) => {
      console.log('log response[0] here', response[0]);
      res.send(response[0]);
    })
    .catch(err => console.log(err));
});

app.post('/reviews', (req, res) => {
  const { product_id, rating, summary, body, recommend, name, email, photos, characteristics } = req.body;
  console.log('log req.body here', req.body);
  console.log('log req.body.rating here', req.body.rating);
  postReview(product_id, rating, summary, body, recommend, name, email, photos, characteristics)
    .then((response) => {
      console.log('log POST Reviews response here', response);
      res.send(response);
    })
    .catch(err => console.log(err));
});