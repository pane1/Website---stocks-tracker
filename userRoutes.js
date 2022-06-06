const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");

router.route("/sign-up").post((req,res) => {

    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Password = req.body.Password;

    const newUser = new User({
        FirstName,
        LastName,
        Email,
        Password
    });

    newUser.save();
})

router.route("/login").get((req,res) => {
    const Email = req.body.Email;
    const Password = req.body.Password;
    
})
router.route("/")
module.exports = router;