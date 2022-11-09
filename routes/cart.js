var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

require("../models/connection");
const Cart = require("../models/carts");
const moment = require('moment')





/*/router.post('/', (req, res) => {
	Cart.find({departure: req.body.departure, arrival: req.body.arrival, date: req.body.date}).then(data => {
		res.json({ cart: data });
	});
});/*/



router.delete("/", (req, res) => {
	const deleteTrip = ({departure: req.body.departure, arrival: req.body.arrival, date: req.body.date})
		Cart.delete({deleteTrip
		}).then(deletedTrip => {
	  		if (deletedTrip.deletedCount > 0) {
		Cart.find().then(data => {
		  res.json({ result: true, cart: data });
		});
	  } else {
		res.json({ result: false, error: "Trip not found" });
	  }
	});
  });



module.exports = router;
