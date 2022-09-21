const express = require("express");
const { dbConnection } = require("./database/databaseConnection");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/user", require("./api/user.api"));
app.use("/news", require("./api/news.api"));
app.use("/com", require("./api/comments.api"));
dbConnection();
app.listen(2000, () => {
  console.log("server is running");
});
