var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

require("../models/connection");
const Trip = require("../models/trips");
const moment = require('moment')


router.post('/', (req, res) => {
    Trip.find({departure: req.body.departure, arrival: req.body.arrival, date: req.body.date.moment().format(DD-MM-YYYY)})
    .then(data => {
        if(data.length > 0) {
            res.json({ result: true, trips: data })
        } else {
            res.json({result: false, error: 'No trip found'})   
        }
    })
})









module.exports = router;
