const router = require('express').Router();
let Menu = require('../models/menu.model');

router.route('/').get((req, res) => {
	Menu.find()
		.then(menus => res.json(menus))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;