document.addEventListener("DOMContentLoaded", function() {

	const app = new App()

	const adapter = new SearchesAdapter()

	const saveSearch = document.getElementById('search')

	const searchTerm = document.getElementById('new-search-body')

	adapter.getSearches()
	.then((response) => {
		app.restaurants = []
		// console.log(response)
		response.forEach(function(restaurant) {
				app.restaurants.push(restaurant)
		})
	})
	saveSearch.addEventListener('click', restaurantHandler)
		// 	app.restaurants.push(restaurant))
		// console.log(app.restaurants)
		// const allRestaurants = app.restaurants
		// const zip = searchTerm.value
		// console.log(zip)
		// const restaurantByZip = allRestaurants.filter(restaurant => restaurant.zipcode == zip)

	function restaurantHandler() {
		event.preventDefault()

		app.filterRestaurantsByZip(searchTerm.value)
		searchTerm.value = ""
		// const filteredRestaurants = app.restaurants.filter(restaurant => restaurant.zipcode == searchTerm.value)


		// console.log(app.restaurants)
		// console.log(filteredRestaurants)
		// function render() {
		// 	return restaurant.restaurantNode.innerHTML = `<ul>${restaurant.restaurantHTML()}</ul>`
		// }
		console.log(app.restaurants)
	}

})




// console.log(app);
