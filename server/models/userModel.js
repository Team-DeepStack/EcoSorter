const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		pfp: {
			type: String,
			required: true,
		},
		waste: {
<<<<<<< HEAD
			bio: {
				type: Number,
				default: 0,
			},
			non_bio: {
=======
			recyclable: {
				type: Number,
				default: 0,
			},
			non_recyclable: {
>>>>>>> d29dc85a025f445430eeef9aa41c3d70ab043222
				type: Number,
				default: 0,
			},
		},
	},
	{ collection: 'user-data' },
);

module.exports = mongoose.model('User', User);
