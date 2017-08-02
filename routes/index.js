var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/login', (req, res, next) => {
	(async () => {
		const user = await User.login(req.body.phoneNumber, req.body.password)

		const token = JWT.sign({
			_id: user._id,
			iat: Date.now(),
			expire: Date.now() + 24 * 60 * 60 * 1000
		}, JWT_SECRET)

		return {
			code: 0,
			data: {
				user: user,
				token: token,
			}
		}
	})()
		.then(r => {
			res.json(r)
		})
		.catch(e => {
			next(e)
		})
})


module.exports = router;
