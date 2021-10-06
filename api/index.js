const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log('Database connected successfully!'))
	.catch((err) => console.log('Connection Failed', err));

app.get('/', (req, res) => res.send('Hello'));

app.listen(process.env.PORT || 8080, () => console.log('Server running on http://localhost:2506'));
