const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://127.0.0.1/reviews";
db.model = require("./model.js");

module.exports = db;