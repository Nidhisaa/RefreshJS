const express = require("express");
const app = express();
const connectDB = require("./DB/DataBase");
require("dotenv").config();
connectDB();
app.use(express.json());
const logTimestamp = require("./Middleware/timeStramp"); 
const PORT = process.env.PORT;
app.use(logTimestamp);
const router = require("./router/route");
app.use("/refresh", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 