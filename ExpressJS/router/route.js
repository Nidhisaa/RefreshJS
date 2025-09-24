const router = require("express").Router();
const User = require("../models/schema");

router.get("/home", (req, res) => {
  res.send("HELLO");
});

router.get("/home/:name", (req, res) => {
  res.send(`HELLO ${req.params.name}`)  ;
});


module.exports = router;