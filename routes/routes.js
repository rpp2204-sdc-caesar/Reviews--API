module.exports = app => {
  const controllers = require("../controllers/controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", controllers.create);

  // Retrieve all Tutorials
  //router.get("/", controllers.findAll);

  // Retrieve all published Tutorials
  router.get("/published", controllers.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/", controllers.getAllReviews);

  // Update a Tutorial with id
  router.put("/:id", controllers.update);

  // Delete a Tutorial with id
  router.delete("/:id", controllers.delete);

  // Create a new Tutorial
  router.delete("/", controllers.deleteAll);

  // MIGHT NEED TO EDIT BELOW LINE
  app.use('/reviews', router);
};