if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const { Router } = require('express');
const { signin, signup } = require('../controllers/userControllers');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const router = require('express').Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.route('/uploadImg').post(upload.single('pfp'), async (req, res) => {
	const imageInfo = req.file;
	res.json({ url: imageInfo.path, filename: imageInfo.filename });
});

module.exports = router;
