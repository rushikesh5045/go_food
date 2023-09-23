const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt  = require('jsonwebtoken');
const jwtSecretKey = "GV^%&ghTF556756787686tghghvGFH";






//SignUp i.e create user
router.post(
  "/createUser",
  [
    body("email", "Invalid Email").isEmail(),
    body("name", "Invalid Name").isLength({ min: 5 }),
    body("password", "Invalid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let salt = await bcrypt.genSalt(10);
    let securedPassword = await bcrypt.hash(req.body.password,salt);
  
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securedPassword,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

//Login
router.post(
  "/loginUser",
  
  [
    body("email", "Invalid Email").isEmail(),
    body("password", "Invalid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({email});
      if(!userData)
      {
        return res.status(400).json({ errors: "Try logging in with correct credentials"});
  
      }
      let passwordCompare = await bcrypt.compare(req.body.password,userData.password)
      if(!passwordCompare)
      {
        return res.status(400).json({ errors: "Try logging in with correct credentials"});
      }
      const data = {
        user:{
               id:userData.id,
        }
      }
      const authToken = jwt.sign(data,jwtSecretKey)
      res.json({ success: true,authToken });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

module.exports = router;
