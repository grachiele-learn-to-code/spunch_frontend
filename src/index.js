const app = new App()
const adapter = new SearchesAdapter()

	const saveSearch = document.getElementById('search')

  	saveSearch.addEventListener('click', restaurantHandler)



  function restaurantHandler() {
  	event.preventDefault()
  	adapter.getSearches()
  	.then((response) => {
  		// console.log(response)
  		response.forEach(restaurant => app.restaurants.push(restaurant)) 
  	// .then((response) => restaurants.render.bind(restaurant))
  		console.log(restuarant)
  	})

  	// function render() {
  	// 	return restaurant.restaurantNode.innerHTML = `<ul>${restaurant.restaurantHTML()}</ul>`
  	// }
  }










// console.log(app);
