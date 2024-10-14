const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UserModel = require("../models/User");

router.post("/signup", async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    const user = await newUser.save();
    res.status(201).send(user);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Please enter valid username and password" });
  }
});