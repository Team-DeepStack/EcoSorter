const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt_decode = require("jwt-decode");
const User = require("../models/userModel");

module.exports.signup = async (req, res) => {
  const { name, email, password, address, pfp } = req.body;
  try {
    const hashpw = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      email,
      address,
      password: hashpw,
      pfp: pfp,
    });
    await user.save();
    const token = jwt.sign(
      {
        email: user.email,
      },
      "concetto-masterstack2.0-project"
    );
    res.json({ status: "ok", user: token });
  } catch (err) {
    console.log(err);
    res.json({ status: "error" });
  }
};

module.exports.userDetails = async (req, res) => {
  const { email } = req.body;
  console.log("In userDetails: ", req.body);
  const user = await User.find({
    email,
  });
  res.json(user);
};

module.exports.userDetails = async (req, res) => {
  const { email } = req.body;
  console.log("In userDetails: ", req.body);
  const user = await User.find({
    email,
  });
  res.json(user);
};

module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({
    email,
  });
  console.log(user);
  if (user.length > 0) {
    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if (isPasswordValid) {
      console.log(user);
      const token = jwt.sign(
        {
          email: user[0].email,
        },
        "concetto-masterstack2.0-project"
      );
      console.log("token: ", jwt.decode(token));
      return res.json({ status: "ok", user: token });
    } else {
      return res.json({ status: "error", user: "invalid password" });
    }
  } else {
    return res.json({ status: "error", user: "false" });
  }
};

module.exports.uploadImg = async (req, res) => {
  const imageInfo = req.file;
  res.json({ url: imageInfo.path, filename: imageInfo.filename });
};

module.exports.fetchLeaderboard = async (req, res) => {
  const users = await User.find({}).sort({ "waste.recyclable": -1 });
  // console.log(users);
  res.json(users);
};

module.exports.addContributions = async (req, res) => {
  const { userId, prediction } = req.body;
  await User.findByIdAndUpdate(userId, {
    $inc: { [prediction]: 1 },
  });
  console.log("done");
};
