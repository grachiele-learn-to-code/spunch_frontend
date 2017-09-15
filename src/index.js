document.addEventListener("DOMContentLoaded", function() {
	const app = new App()
	const adapter = new SearchesAdapter()
	const saveSearch = document.getElementById('search')
	const searchTerm = document.getElementById('new-search-body')
	const restResult = document.getElementById('searches-container')
	const newSearchContainer = document.getElementById('new-search-container')
	const nextButton = document.getElementById('next-btn')
	const prevButton = document.getElementById('prev-btn')
	const changeLocation = document.getElementById('change-location')
	let currentIndex = 0

	adapter.getSearches()
	.then((response) => {
		response.forEach(function(restaurant) {
				app.restaurants.push(restaurant)
		})
	})

	saveSearch.addEventListener('click', restaurantHandler)


	function restaurantHandler() {
		event.preventDefault()

		app.filterRestaurantsByZip(searchTerm.value)
		// saveSearch.parentNode.outerHTML = ""
		saveSearch.parentNode.style.display = "none"
		console.log(app.filtered)
		renderRestaurant()
	}

	function renderSearchBarRemoveRestaurant() {
		// newSearchContainer.innerHTML = `<form id="new-search-form">
		// 	<input type="text" name="search-body" id="new-search-body">
		// 	<input class="ui button blue" id="search" type="submit" value="Save search">
		// </form>`
		saveSearch.parentNode.style.display = "block"
		restResult.innerHTML = ""
		nextButton.style.display = "none"
		prevButton.style.display = "none"
		changeLocation.style.display = "none"
		currentIndex = 0
	}

	function renderRestaurant() {
		let rest = app.filtered
		let currentRest =
			`
			<div class="ui centered card">
				<div class="image">
					<a target="_blank" href="${rest[currentIndex].url}">
					<img class="ui image" src="${rest[currentIndex].image}" >
					</a>
				</div>
				<div class="content">
					<p>${rest[currentIndex].name}</p><br>
					${rest[currentIndex].address}<br>
					${rest[currentIndex].phone}<br>
				</div>
			</div>`
		changeLocation.style.display = "block"
		if (currentIndex == 0) {
			nextButton.style.display = "block"
		} else if (currentIndex > 0 && currentIndex < rest.length) {
			prevButton.style.display = "block"
		}
		restResult.innerHTML = currentRest

	//<div class="ui star rating" data-rating="3"></div>

	}

	nextButton.addEventListener('click', function() {
		currentIndex += 1
		if (currentIndex < app.filtered.length) {
			renderRestaurant()
		} else if (currentIndex == app.filtered.length) {
			renderSearchBarRemoveRestaurant()
			alert("There are no more restaurants. Try another!")
		}
	})

	prevButton.addEventListener('click', function() {
		if (currentIndex == 0) {
			prevButton.style.display = "none"
		} else if (currentIndex != 0) {
			currentIndex -= 1
		}
		if (currentIndex < app.filtered.length) {
			renderRestaurant()
		} else if (currentIndex == app.filtered.length) {
			renderSearchBarRemoveRestaurant()
			alert("There are no more restaurants. Try another!")
		}
	})

	changeLocation.addEventListener('click', function(){
		renderSearchBarRemoveRestaurant()
	})




// function currentRestaurant() {
// 	currentRest =
// }

})
