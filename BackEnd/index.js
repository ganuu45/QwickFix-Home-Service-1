const express = require("express");
const app = express();
require("dotenv").config("./.env");
const sanitizer = require("perfect-express-sanitizer");
const cors = require("cors");
const mongoose = require("mongoose");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const userRoute = require("./routes/userRoute");




app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));

  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
      console.log(err);
    });


app.use("/api/users", userRoute);

//custom error handler
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
