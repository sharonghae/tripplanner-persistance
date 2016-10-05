var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day')


router.get('/api/days', function(req, res, next) {
	Day.findAll()
	.then(function(days){
		res.json(days)
	})
	.catch(function(err){
		console.error(err)
	})
	// console.log('get all days')

})

router.post('/api/days/', function(req, res, next){
	Day.create({
		number: 1
	})
	.then(function(dayInstance){
		res.json(dayInstance)
	})
	.catch(next)
})

router.get('/api/days/:numberDay', function(req, res, next){
	Day.findOne({
		where: {
			number: req.params.numberDay
		}
	})
	.then(function(dayInstance){
		if(!dayInstance) res.status(404).send("Not Found")
		res.json(dayInstance)
	})
	.catch(next)
})

router.post('/api/days/:id/hotels', function(req, res, next) {

})

router.post('/api/days/:id/restaurants', function(req, res, next) {

})

router.post('/api/days/:id/activities', function(req, res, next) {

})


module.exports = router;