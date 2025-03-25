const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const StudentRouter = require("./routes/StudentRoute");

const app = express();

// middle ware
dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.port;
const mongoUrl = process.env.MONGO_URL;

// conncetion to mongodb server
mongoose.connect(mongoUrl)
.then(() => {
  console.log("MongoDb connected 😁");

app.use("/students", StudentRouter);

  app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
    
  })
})
.catch((error) => {
  console.log(error);
  console.log("connection failed 😐");
});