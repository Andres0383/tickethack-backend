var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

require("../models/connection");
const Cart = require("../models/carts");
const moment = require('moment')





router.post('/', (req, res) => {
	Cart.find({departure: req.body.departure, arrival: req.body.arrival}).then(data => {
		res.json({ cart: data });
	});
});




module.exports = router;
