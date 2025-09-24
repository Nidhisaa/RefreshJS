const express = require("express");
const connectDB = require("./DB/DataBase");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const logTimestamp = require("./Middleware/logTimestamp"); 
app.use(logTimestamp);

connectDB();
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const router = require("./router/route");
app.use(logTimestamp);
app.use("/refresh", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
