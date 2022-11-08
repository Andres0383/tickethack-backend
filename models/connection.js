const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Admin:j9Zp3AY1lpqF8x5R@cluster0.bwqp37r.mongodb.net/tickethack";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
