const express = require("express");
const app = express();
require("dotenv").config("./.env");
const sanitizer = require("perfect-express-sanitizer");
const cors = require("cors");
const mongoose = require("mongoose");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const userRoute = require("./routes/userRoute");

app.use(
  sanitizer.clean({
    xss: true,
    noSql: true,
    sql: true,
  })
);
app.use(cors());



//custom error handler
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
