$(document).ready(function() {
	//dropdown 
	$.each(hotels, function(index, hotel){
		$('#hotel-choices').append('<option>' + hotel.name + '</option>');
	})
	$.each(restaurants, function(index, restaurant){
		$('#restaurant-choices').append('<option>' + restaurant.name + '</option>');
	})
	$.each(activities, function(index, activity){
		$('#activity-choices').append('<option>' + activity.name + '</option>');
	})

	function addMarker(options, choice, type) {
		var index = options.findIndex(function(option){
			return option.name === choice;
		})
		drawMarker(type, options[index].place.location, options[index].id)
	}


	//store choices 
	var currentHotel, currentRestaurant, currentActivity;
	var currentDay = {};
	var allDays = {};

	//add item 
		//hotel
	$('#options-panel').on('click','button:first', function() {
		currentHotel = $('#hotel-choices option:selected').text()
		$('.itinerary-item:first span').text(currentHotel)
		addMarker(hotels, currentHotel, 'hotel')	
		currentDay['hotel'] = currentHotel
		console.log(currentDay);
	})
		//restaurant
	$('#options-panel').on('click','button:eq(1)', function() {
		currentRestaurant = $('#restaurant-choices option:selected').text()
		$('.itinerary-item:eq(1) span').text(currentRestaurant)
		addMarker(restaurants, currentRestaurant, 'restaurant')
	})
		//activity
	$('#options-panel').on('click','button:last', function() {
		currentActivity = $('#activity-choices option:selected').text()
		var list = [];
		$('.itinerary-item:last span').each(function(i){
			list.push($(this).text())
		})
		if(!$('.itinerary-item:last span').text()) 
			$('.itinerary-item:last span').text(currentActivity)
		else if(list.indexOf(currentActivity) === -1)
		$('.itinerary-item:last span:last').after("<span class='title activity'>" + currentActivity + "</span>")
		addMarker(activities, currentActivity, 'activity')

	})
	//remove item
	$('#itinerary').on('click', '.remove', function () {
		var name = $(this).siblings(':last').text();
		var className = $(this).siblings(':last').attr('class')
		var theClass = className.split(' ').slice(1).toString()
		var id;
		if(theClass === 'hotel') {
			var index = hotels.findIndex(function(hotel){
			return hotel.name === name;
			})
			id = hotels[index].id
		}		
		if(theClass === 'restaurant') {
			var index = restaurants.findIndex(function(restaurant){
			return restaurant.name === name;
			})
			id = restaurants[index].id
		}		
		if(theClass === 'activity') {
			var index = activities.findIndex(function(activity){
			return activity.name === name;
			})
			id = activities[index].id
		}		
		if($(this).siblings().length === 1) 
			$(this).siblings().replaceWith("<span class='title'></span>"); 
		else $(this).siblings(':last').remove();
		removeMarker(theClass,id); 
	});


	//add another day button
	var dayCount = 1;
	$('#day-add').on('click', function() {
		$(this).before('<button class="btn btn-circle day-btn">'+ dayCount +'</button>')
		dayCount++;
	})

})