var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');


router.get('/api/hotels', function(req,res,next) {
	Hotel.findAll()
	.then(function(hotels){
		res.json(hotels)
	})
	
})

router.get('/api/restaurants', function(req,res,next) {
	Restaurant.findAll()
	.then(function(restaurants){
		res.json(restaurants)
	})
	
})

router.get('/api/activities', function(req,res,next) {
	Activity.findAll()
	.then(function(activities){
		res.json(activities)
	})
	
})

module.exports = router;