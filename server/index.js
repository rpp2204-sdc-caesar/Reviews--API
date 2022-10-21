const app = require("./app.js");

const port = 3000;

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});