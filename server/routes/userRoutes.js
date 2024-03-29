if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { Router } = require("express");
const {
  signin,
  signup,
  uploadImg,
  fetchLeaderboard,
  userDetails,
  addContributions,
} = require("../controllers/userControllers");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });
const router = require("express").Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/getUser", userDetails);
router.post("/uploadImg", upload.single("pfp"), uploadImg);
router.get("/leaderboard", fetchLeaderboard);
router.patch("/addContribution", addContributions);

module.exports = router;
