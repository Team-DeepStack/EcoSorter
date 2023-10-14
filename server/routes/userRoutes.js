if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const { Router } = require('express');
<<<<<<< HEAD
const { signin, signup } = require('../controllers/userControllers');
=======
const {
	signin,
	signup,
	uploadImg,
	fetchLeaderboard,
} = require('../controllers/userControllers');
>>>>>>> d29dc85a025f445430eeef9aa41c3d70ab043222
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const router = require('express').Router();

router.post('/signup', signup);
router.post('/signin', signin);
<<<<<<< HEAD
router.route('/uploadImg').post(upload.single('pfp'), async (req, res) => {
	const imageInfo = req.file;
	res.json({ url: imageInfo.path, filename: imageInfo.filename });
});
=======
router.post('/uploadImg', upload.single('pfp'), uploadImg);
router.get('/leaderboard', fetchLeaderboard);
>>>>>>> d29dc85a025f445430eeef9aa41c3d70ab043222

module.exports = router;
