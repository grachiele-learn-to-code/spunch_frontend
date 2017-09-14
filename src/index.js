document.addEventListener("DOMContentLoaded", function() {
	const app = new App()
	const adapter = new SearchesAdapter()
	const saveSearch = document.getElementById('search')
	const searchTerm = document.getElementById('new-search-body')
	const restResult = document.getElementById('searches-container')
	let currentIndex = 0

	adapter.getSearches()
	.then((response) => {
		app.restaurants = []
		// console.log(response)
		response.forEach(function(restaurant) {
				app.restaurants.push(restaurant)
		})
	})

	saveSearch.addEventListener('click', restaurantHandler)
		
$(".rating").rating();

function restaurantHandler() {
	event.preventDefault()

	app.filterRestaurantsByZip(searchTerm.value)
	saveSearch.parentNode.outerHTML = ""
	renderRestaurant()


	// console.log(app.restaurants)
}

function renderRestaurant() {
	// let rest = app.restaurants
	// const restaurantEnd = app.restaurants.length
	// console.log(restaurantEnd)
	let currentRest =  

		`
		<div class="ui centered card">
			<a class="image" target="_blank" href="${rest[currentIndex].url}">
			<img class="ui image" src="${rest[currentIndex].image}" >
			</a>
			${rest[currentIndex].name}
			${rest[currentIndex].address}
			${rest[currentIndex].phone}
			<div class="ui rating" data-rating="${rest[currentIndex].rating}" dating-max-rating="5"></div>
			<a target= "_blank" href="${rest[currentIndex].url}">Visit Website</a>
		</div>`

		restResult.innerHTML = currentRest	


//<div class="ui star rating" data-rating="3"></div>

	}

const nextButton = document.getElementById('next')
nextButton.addEventListener('click', function() {
	currentIndex++ 
	renderRestaurant()
})

// function currentRestaurant() {
// 	currentRest = 
// }

})





