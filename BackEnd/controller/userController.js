const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const generateToken = require("../utils/generateTokens");

//@desc    Auth (login) user/set token
//route    POST /api/users/auth
//@access  Public
const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      fname: user.fname,
      lname: user.lname,
      username: user.username,
      email: user.email,
      balance: user.balance,
    });
  } else {
    res.status(400);
    throw new Error("Invalid username or password");
  }
});

//@desc    Register new user
//route    POST /api/users
//@access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, phone, email, password } = req.body;

  // Check if the username is already taken
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  // Create a new user
  const newUser = await User.create({
    name,
    phone,
    email,
    password,
  });

  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      name: newUser.name,
      phone: newUser.phone,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc    logout user
//route    POST /api/users/logout
//@access  Public
const loggoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    message: "User Loggout",
  });
});
