/* eslint-disable no-undef */
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const dbUrl = process.env.DB_LOCAL || process.env.DB_CLOUD;
const port = process.env.PORT || 3000;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!"));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
