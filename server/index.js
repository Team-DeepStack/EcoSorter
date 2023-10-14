const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/', userRoutes);

mongoose
	.connect(
		'mongodb+srv://csratul03:e1pr0EH55XehZrRq@cluster0.gautos5.mongodb.net/?retryWrites=true&w=majority',
	)
	.then(() => {
		console.log('DB connected');
	})
	.catch((err) => {
		console.log(err);
	});
const user = require('./models/userModel');

app.listen(4000, () => {
	console.log('server started at port 4000');
});
