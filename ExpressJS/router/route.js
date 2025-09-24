const router = require("express").Router();
const User = require("../models/schema");

const checkRole = (allowedRoles) => {

  return (req, res, next) => {
    const role = req.headers["role"];
    if (!role){return res.status(400).json({ error: "Role header is required" });
    }
    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ error: "Access Denied" });
    }
    next();

    };
  };


router.get("/home", (req, res) => {
  res.send("HELLO");
});

router.get("/home/:name", (req, res) => {
  res.send(`HELLO ${req.params.name}`)  ;
});


router.post("/add", async (req, res) => {
  try {
    const { name, ID, role, password } = req.body;
    const newUser = new User({ name, ID, role, password });
    await newUser.save();
    res.status(201).send("User added successfully");
  } catch (error) {
    res.status(400).send("Error adding user: " + error.message);
  } 
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Error fetching users: " + error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ ID: req.params.id });  
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successfully");
  }
  catch (error) {
    res.status(500).send("Error deleting user: " + error.message);
  }
});



module.exports = router;