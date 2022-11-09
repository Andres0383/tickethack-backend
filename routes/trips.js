var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

require("../models/connection");
const Trip = require("../models/trips");
const moment = require('moment')


router.post('/', (req, res) => {
 const theDate = new Date(req.body.date)

 const nextDate = new Date(req.body.date)
 
 nextDate.setDate(nextDate.getDate() +1 )

    Trip.find({departure: { $regex: new RegExp(req.body.departure, 'i') }, arrival: { $regex: new RegExp(req.body.arrival, 'i') }, date: {"$gte": theDate, "$lt": nextDate }})
    .then(data => {
        if(data.length > 0) {
            res.json({ result: true, trips: data })
        } else {
            res.json({result: false, error: 'No trip found'})
        }
    })
})
 








module.exports = router;
