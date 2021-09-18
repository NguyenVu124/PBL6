const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb://localhost/practice", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!"));

app.listen(3000, () => {
  console.log("App running on port 3000");
});
