const express = require("express");
const userRouter = require("./routes/userRoutes");
const hotelRouter = require("./routes/hotelRoutes");
const app = express();
app.use(express.json());

app.use("/", userRouter);
app.use("/", hotelRouter);

module.exports = app;
