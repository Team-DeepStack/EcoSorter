if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const { Router } = require('express');
const {
	signin,
	signup,
	uploadImg,
	fetchLeaderboard,
} = require('../controllers/userControllers');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const router = require('express').Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/uploadImg', upload.single('pfp'), uploadImg);
router.get('/leaderboard', fetchLeaderboard);

module.exports = router;
