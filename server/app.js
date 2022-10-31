const express = require("express");
const mongoose = require('mongoose');
const { getReviews, postReview, getMetaData } = require("./db.js");
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/loaderio-96b697994ddaf2624f8b13182a1d2544', (req, res) => {
  res.send('loaderio-96b697994ddaf2624f8b13182a1d2544');
});

app.get('/reviews', (req, res) => {
  const { product_id } = req.query;
  getReviews(product_id)
    .then((response) => {
      res.send(response[0]);
    })
    .catch(err => console.log(err));
});

app.get('/reviews/meta', (req, res) => {
  const { product_id } = req.query;
  console.log('meta data: log product_id here', product_id);
  console.log('medta data: log { product_id } here', { product_id });
  getMetaData(product_id)
    .then((response) => {
      console.log('Meta data: log response[0] here', response[0]);
      res.send(response[0]);
    })
    .catch(err => console.log(err));
});

// TODO: Still working on post review
// app.post('/reviews', (req, res) => {
//   const { product_id, rating, summary, body, recommend, name, email, photos, characteristics } = req.body;
//   console.log('log req.body here', req.body);
//   console.log('log req.body.rating here', req.body.rating);
//   postReview(product_id, rating, summary, body, recommend, name, email, photos, characteristics)
//     .then((response) => {
//       console.log('log POST Reviews response here', response);
//       res.send(response);
//     })
//     .catch(err => console.log(err));
// });

module.exports = app;