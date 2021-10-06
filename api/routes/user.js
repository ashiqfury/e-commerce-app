const router = require('express').Router();

router.get('/userget', (req, res) => {
	res.send('Test user reached');
});
router.post('/userpost', (req, res) => {
	const username = req.body.username;
	console.log(username);
	res.send(username);
});

module.exports = router;
