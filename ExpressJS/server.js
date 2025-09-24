const express = require("express");
const connectDB = require("./DB/DataBase");
connectDB();
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const router = require("./router/route");

app.use("/refresh", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
