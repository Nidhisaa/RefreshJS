const express = require('express');
const connectDB = require('./DB/DataBase');
connectDB();
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
