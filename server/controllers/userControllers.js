const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

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
				name: user.name,
				email: user.email,
			},
			'concetto-masterstack2.0-project',
		);
		res.json({ status: 'ok', user: token });
	} catch (err) {
		console.log(err);
		res.json({ status: 'error' });
	}
};
<<<<<<< HEAD
=======

>>>>>>> d29dc85a025f445430eeef9aa41c3d70ab043222
module.exports.signin = async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);
	const user = await User.find({
		email,
	});
	console.log(user);
	if (user.length > 0) {
		const isPasswordValid = await bcrypt.compare(password, user[0].password);
		if (isPasswordValid) {
			const token = jwt.sign(
				{
					name: user.name,
					email: user.email,
				},
				'concetto-masterstack2.0-project',
			);
			return res.json({ status: 'ok', user: token });
		} else {
			return res.json({ status: 'error', user: 'invalid password' });
		}
	} else {
		return res.json({ status: 'error', user: 'false' });
	}
};
<<<<<<< HEAD
=======

module.exports.uploadImg = async (req, res) => {
	const imageInfo = req.file;
	res.json({ url: imageInfo.path, filename: imageInfo.filename });
};

module.exports.fetchLeaderboard = async (req, res) => {
	const users = await User.find({}).sort({ 'waste.recyclable': -1 });
	res.json(users);
}
>>>>>>> d29dc85a025f445430eeef9aa41c3d70ab043222
