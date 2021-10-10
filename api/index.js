const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

dotenv.config();
const app = express();

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log('Database connected successfully!'))
	.catch((err) => console.log('Connection Failed', err));

app.use(express.json()); // accepts json format in post request
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(process.env.PORT || 8080, () => console.log('Server running on http://localhost:2506'));
