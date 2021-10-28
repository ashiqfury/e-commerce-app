const User = require('../models/User');
const { verifyToken, verifyTokenAndAuthentication, verifyTokenAndAdmin } = require('./verifyToken');

const updateUser = async (req, res) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASSWORD_SECRET_KEY
		).toString();
	}

	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
};

const deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json('User has been deleted!');
	} catch (err) {
		res.status(500).json(err);
	}
};

const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getAllUser = async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)); // return today's date of lastyear

	try {
		const data = await User.aggregate([
			{ $match: { createdAt: { $gte: lastYear } } },
			{ $project: { month: { $month: '$createdAt' } } },
			{ $group: { _id: '$month', total: { $sum: 1 } } },
		]);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getStats = async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)); // return today's date of lastyear

	try {
		const data = await User.aggregate([
			{ $match: { createdAt: { $gte: lastYear } } },
			{ $project: { month: { $month: '$createdAt' } } },
			{ $group: { _id: '$month', total: { $sum: 1 } } },
		]);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
};

export default {
	updateUser,
	deleteUser,
	getUser,
	getAllUser,
	getStats,
};
